import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Finizen",
		'fr-fr': "Dofin",
		'es-es': "Finizen",
		'es-mx': "Finizen",
		'de-de': "Normifin",
		'it-it': "Finizen",
		'pt-br': "Finizen"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [963],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Draining Fin",
			'fr-fr': "Aileron Siphon",
			'es-es': "Aleta Drenaje",
			'es-mx': "Aleta Drenadora",
			'de-de': "Diebesflosse",
			'it-it': "Assorbipinna",
			'pt-br': "Barbatana Drenante"
		},

		cost: ["Water", "Water"],

		damage: 20,

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'es-mx': "Cura 20 puntos de daño a este Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon."
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
