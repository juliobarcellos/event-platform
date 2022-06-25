import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";
import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface GetLessonBySlugQueryResponse {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            bio: string;
            avatarURL: string;
            name: string;
        }
        challenge: {
            url: string;
        }
    }
}

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useGetLessonBySlugQuery ({
        variables: {
            slug: props.lessonSlug,
        }
    })

    if ( !data || !data.lesson) {
        return (
            <div className="flex-1">
                <p>Carregando...</p>
            </div>
        )
    }

    return(
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId}/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>

                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6">
                                <img 
                                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                                    src={data.lesson.teacher.avatarURL} 
                                    alt=""
                                />

                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                    <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="https://discord.gg/jHCuu8P9" target="_blank" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </a>

                        <a href={data.lesson.challenge?.url} target="_blank" className={`${!data.lesson.challenge && 'hidden'} p-4 text-sm border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors`}>
                            <Lightning size={24} />
                            Acesse o Desafio
                        </a>
                    </div>
                </div>

                <div className="gap-8 mt-20 grid grid-cols-2 ">
                    <a href="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5" target="_blank" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-600 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Material Complementar</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse o material para acelerar o seu desenvolvimento
                            </p>
                        </div>

                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR" target="_blank" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-600 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Wallpapers Exclusivos</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize sua máquina
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <Image size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}