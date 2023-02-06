import { SupportedLanguages } from '../../../meta/definitions/database'
import { FileFunction } from '../compilerInterfaces'
import { getSeries, serieToSerieSingle } from '../utils/serieUtil'

const fn: FileFunction = async (lang: SupportedLanguages) => {
	const common = await getSeries(lang)
	return await Promise.all(common.map((val) => serieToSerieSingle(val, lang)))
}

export default fn
