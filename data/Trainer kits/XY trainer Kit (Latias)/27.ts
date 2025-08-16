import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	dexId: [253],
	set: Set,

	name: {
		en: "Grovyle",
		fr: "Massko",
		es: "Grovyle",
		it: "Grovyle",
		pt: "Grovyle",
		de: "Reptain"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Treecko",
		fr: "Arcko",
		es: "Treecko",
		it: "Treecko",
		pt: "Treecko",
		de: "Geckarbor"
	},

	stage: "Stage1",
	retreat: 1,

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98344
	}
}

export default card