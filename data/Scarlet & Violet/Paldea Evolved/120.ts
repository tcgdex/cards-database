import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [932],
	set: Set,

	name: {
		fr: "Selutin",
		en: "Nacli",
		es: "Nacli",
		it: "Nacli",
		pt: "Nacli",
		de: "Geosali"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Coup d'Boule",
			en: "Headbutt",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715595,
				tcgplayer: 497535,
				cardtrader: 248767
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715595,
				tcgplayer: 497535,
				cardtrader: 248767
			}
		},
	],

	illustrator: "yuu",

	
}

export default card
