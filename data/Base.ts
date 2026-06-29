import { Serie } from '../interfaces'

const base: Serie = {
	name: {
		en: "Base",
		fr: "Base",
		es: "Clásica",
		it: "Originale",
		de: "Grund",
		pt: "Coleção Básica",
		nl: "Basis",
		pl: "Diament i Perla"
	},
	id: "base",

	related: [
		{
			type: "translation",
			seriesPath: "data-asia/PMCG.ts"
		}
	]
}

export default base
