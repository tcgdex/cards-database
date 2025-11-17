import { getSets, setToSetSingle } from '../utils/setUtil'
import { SupportedLanguages } from '../../../interfaces'
import { FileFunction } from '../compilerInterfaces'


const fn: FileFunction = async (lang: SupportedLanguages) => {
	const common = await getSets(undefined, lang)
	const results = await Promise.all(common.map((set) => setToSetSingle(set, lang)))
	
	return results.sort((a, b) => {
		const dateA = typeof a.releaseDate === 'object' 
			? Object.values(a.releaseDate)[0] 
			: a.releaseDate
		const dateB = typeof b.releaseDate === 'object' 
			? Object.values(b.releaseDate)[0] 
			: b.releaseDate
		return dateA > dateB ? 1 : -1
	})
}

export default fn
