import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Finizen",
		fr: "Dofin",
		es: "Finizen",
		'es-mx': "Finizen",
		de: "Normifin"
	},

	illustrator: "Yukiko baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [963],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Draining Fin"
		},

		cost: ["Water", "Water"],

		damage: 20,

		effect: {
			en: "Heal 20 damage from this Pokémon"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895809,
				tcgplayer: 704778
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895809,
				tcgplayer: 704778
			}
		},
	],
}

export default card
