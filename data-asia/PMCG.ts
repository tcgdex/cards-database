import { Serie } from '../interfaces'

const serie: Serie = {
	name: {
		ja: 'ポケットモンスターカードゲーム'
	},
	id: 'PMCG',

	related: [
		{
			type: "translation",
			seriesPath: "data/Base.ts"
		}
	]
}

export default serie
