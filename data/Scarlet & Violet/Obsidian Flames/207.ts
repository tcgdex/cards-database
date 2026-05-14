import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [16],
	set: Set,

	name: {
		fr: "Roucool",
		en: "Pidgey",
		es: "Pidgey",
		it: "Pidgey",
		pt: "Pidgey",
		de: "Taubsi"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Tornade",
			en: "Gust",
			es: "Tornado",
			it: "Raffica",
			pt: "Lufada de Vento",
			de: "Windstoß"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725287,
				tcgplayer: 509955,
				cardtrader: 255649
			}
		},
	],

	illustrator: "Jerky",

	
}

export default card
