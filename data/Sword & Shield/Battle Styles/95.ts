import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [228],
	set: Set,

	name: {
		en: "Houndour",
		fr: "Malosse",
		es: "Houndour",
		it: "Houndour",
		pt: "Houndour",
		de: "Hunduster"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "They make repeated eerie howls before dawn to call attention to their pack."
	},

	thirdParty: {
		cardmarket: 545566,
		tcgplayer: 234226
	}
}

export default card