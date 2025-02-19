
export default function CorrectionCard({correctedSentence, tips,example, improvement}) {
    return (
        <div className="mt-8 flex justify-center">
            <div className=" border border-gray-300 rounded-xl p-4">
            
            <div className="space-y-5 ">
                <div>
                    <p className="text-2xl font-bold">Corrected Sentence</p>
                    <p>{correctedSentence}</p>
                </div>
                <div>
                    <p className="text-2xl font-bold">Improvement</p>
                    <p>{improvement}</p>
                </div>
                <div>
                    <p className="text-2xl font-bold">Tips</p>
                    <p>{tips}</p>
                </div>
                <div>
                    <p className="text-2xl font-bold">Example</p>
                    <p>{example}</p>
                </div>

            </div>
            </div>
        </div>
    )
}