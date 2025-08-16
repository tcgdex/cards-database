import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [420],
	set: Set,

	name: {
		en: "Cherubi",
		fr: "Ceribou",
		es: "Cherubi",
		it: "Cherubi",
		pt: "Cherubi",
		de: "Kikugi"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Leafage",
			fr: "Feuillage",
			es: "Follaje",
			it: "Fogliame",
			pt: "Folhagem",
			de: "Blattwerk"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
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
		en: "The deeper a Cherubi's red, the more nutrients it has stockpiled in its body. And the sweeter and tastier its small ball!"
	},

	thirdParty: {
		cardmarket: 544931,
		tcgplayer: 234050
	}
}

export default card
