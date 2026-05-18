import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [960],
	set: Set,

	name: {
		fr: "Taupikeau",
		en: "Wiglett",
		es: "Wiglett",
		it: "Wiglett",
		pt: "Wiglett",
		de: "Schligda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Pluie Éclaboussante",
			en: "Rain Splash",
			es: "Golpe de Lluvia",
			it: "Spruzzapioggia",
			pt: "Chuva Borrifante",
			de: "Regenplatscher"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725138,
				tcgplayer: 509807,
				cardtrader: 255618
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725138,
				tcgplayer: 509807,
				cardtrader: 255618
			}
		},
	],

	illustrator: "Pani Kobayashi",

	
}

export default card
