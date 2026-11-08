import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "Thanks to the slimy membrane covering its body punches or kicks from its enemies slide right off it.",
	},


	name: {
		'en-us': "Goomy",
		'fr-fr': "Mucuscule",
		'es-es': "Goomy",
		'es-mx': "Goomy",
		'de-de': "Viscora",
		'it-it': "Goomy",
		'pt-br': "Goomy"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [704],
	hp: 60,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Absorb",
			'fr-fr': "Vole-Vie",
			'es-es': "Absorber",
			'es-mx': "Absorción",
			'de-de': "Absorber",
			'it-it': "Assorbimento",
			'pt-br': "Absorção"
		},

		cost: ["Water", "Psychic"],
		damage: 30,

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon."
		}
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886458,
				tcgplayer: 693496
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886458,
				tcgplayer: 693496
			}
		},
	],
}

export default card
