import { SupportedLanguages } from '../../../interfaces'
import { FileFunction } from '../compilerInterfaces'
import { getSeries, serieToSerieSingle } from '../utils/serieUtil'

const fn: FileFunction = async (lang: SupportedLanguages) => {
	const common = await getSeries(lang)
	const results = await Promise.all(common.map((val) => serieToSerieSingle(val, lang)))
	
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
