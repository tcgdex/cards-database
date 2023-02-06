import { getSets, setToSetSingle } from '../utils/setUtil'
import { SupportedLanguages } from '../../../meta/definitions/database'
import { FileFunction } from '../compilerInterfaces'


const fn: FileFunction = async (lang: SupportedLanguages) => {
	const common = await getSets(undefined, lang)
	return await Promise.all(common.map((set) => setToSetSingle(set, lang)))
}

export default fn
