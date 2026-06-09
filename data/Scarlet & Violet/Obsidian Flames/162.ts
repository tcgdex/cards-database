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

	rarity: "Common",
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

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "It is docile and prefers to avoid conflict. If disturbed, however, it can ferociously strike back.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725242,
				tcgplayer: 509666,
				cardtrader: 255847
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725242,
				tcgplayer: 509666,
				cardtrader: 255847
			}
		},
	],

	illustrator: "Naoyo Kimura",

	
}

export default card
