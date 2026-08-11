import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [974],
	set: Set,

	name: {
		'en-us': "Cetoddle",
		'fr-fr': "Piétacé",
		'es-es': "Cetoddle",
		'it-it': "Cetoddle",
		'pt-br': "Cetoddle",
		'de-de': "Flaniwal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Draining Fin",
			'fr-fr': "Aileron Siphon",
			'es-es': "Aleta Drenaje",
			'it-it': "Assorbipinna",
			'pt-br': "Barbatana Drenante",
			'de-de': "Diebesflosse"
		},

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794319,
				tcgplayer: 589895
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794319,
				tcgplayer: 589895
			}
		},
	],

	illustrator: "Ayako Ozaki",
	
}

export default card
