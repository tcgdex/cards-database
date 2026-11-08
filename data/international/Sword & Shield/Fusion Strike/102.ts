import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [807],
	set: Set,

	name: {
		'en-us': "Zeraora",
		'fr-fr': "Zeraora",
		'es-es': "Zeraora",
		'it-it': "Zeraora",
		'pt-br': "Zeraora",
		'de-de': "Zeraora"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Teeziro",

	description: {
		'en-us': "It approaches its enemies at the speed of lightning, then tears them limb from limb with its sharp claws."
	},

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Wild Charge",
			'fr-fr': "Éclair Fou",
			'de-de': "Stromstoß",
			'es-es': "Voltio Cruel",
			'pt-br': "Ataque Selvagem",
			'it-it': "Sprizzalampo"
		},

		damage: 70,

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582495,
				tcgplayer: 253258
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582495,
				tcgplayer: 253258
			}
		},
	],
}

export default card
