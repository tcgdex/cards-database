import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [546],
	set: Set,

	name: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'de-de': "Waumboll",
		'it-it': "Cottonee",
		'pt-br': "Cottonee",
		'es-es': "Cottonee",
		'es-mx': "Cottonee"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Absorb",
			'fr-fr': "Vole-Vie",
			'de-de': "Absorber",
			'it-it': "Assorbimento",
			'pt-br': "Absorção",
			'es-es': "Absorber",
			'es-mx': "Absorción"
		},

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'es-mx': "Cura 10 puntos de daño a este Pokémon."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835907,
				tcgplayer: 642119
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835907,
				tcgplayer: 642119
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836499,
				tcgplayer: 642365
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836500,
				tcgplayer: 642293
			}
		},
	],
}

export default card
