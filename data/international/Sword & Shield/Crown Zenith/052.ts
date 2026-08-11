import { Card } from "models/database/card"
import Set from "../Crown Zenith"

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

	illustrator: "HYOGONOSUKE",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Wild Charge",
			'fr-fr': "Éclair Fou",
			'es-es': "Voltio Cruel",
			'it-it': "Sprizzalampo",
			'pt-br': "Ataque Selvagem",
			'de-de': "Stromstoß"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",


	description: {
		'en-us': "It approaches its enemies at the speed of lightning, then tears them limb from limb with its sharp claws.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691769,
				tcgplayer: 478162
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691769,
				tcgplayer: 478162
			}
		},
	],
}

export default card
