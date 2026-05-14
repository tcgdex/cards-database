import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [963],
	set: Set,

	name: {
		fr: "Dofin",
		en: "Finizen",
		es: "Finizen",
		it: "Finizen",
		pt: "Finizen",
		de: "Normifin"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			fr: "Coup de Queue",
			en: "Tail Smack",
			es: "Bofetón Cola",
			it: "Codasberla",
			pt: "Ataque de Cauda",
			de: "Schweifschlag"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725141,
				tcgplayer: 509816,
				cardtrader: 255621
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725141,
				tcgplayer: 509816,
				cardtrader: 255621
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
