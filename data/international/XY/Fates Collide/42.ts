import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'es-es': "Pupitar",
		'it-it': "Pupitar",
		'pt-br': "Pupitar",
		'de-de': "Pupitar"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
		'es-es': "Larvitar",
		'it-it': "Larvitar",
		'pt-br': "Larvitar",
		'de-de': "Larvitar"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Thrash",
				'fr-fr': "Mania",
				'es-es': "Golpe",
				'it-it': "Colpo",
				'pt-br': "Castigar",
				'de-de': "Fuchtler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage. If tails, this Pokémon does 20 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más. Si sale cruz, este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più. Se esce croce, questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais. Se sair coroa, este Pokémon causará 20 de danos a si mesmo.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu. Bei \"Zahl\" fügt sich dieses Pokémon selbst 20 Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its shell is as hard as sheet rock, and it is also very strong. Its thrashing can topple a mountain.",
	},

	thirdParty: {
		cardmarket: 289866,
		tcgplayer: 117802
	}
}

export default card
