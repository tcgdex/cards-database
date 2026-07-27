import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Finizen",
		fr: "Dofin",
		es: "Finizen",
		'es-mx': "Finizen",
		de: "Normifin",
		it: "Finizen",
		pt: "Finizen"
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
			en: "Draining Fin",
			fr: "Aileron Siphon",
			es: "Aleta Drenaje",
			'es-mx': "Aleta Drenadora",
			de: "Diebesflosse",
			it: "Assorbipinna",
			pt: "Barbatana Drenante"
		},

		cost: ["Water", "Water"],

		damage: 20,

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			'es-mx': "Cura 20 puntos de daño a este Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano deste Pokémon."
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
