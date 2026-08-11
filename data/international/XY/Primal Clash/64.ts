import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Eelektrik",
		'fr-fr': "Lampéroie",
		'es-es': "Eelektrik",
		'it-it': "Eelektrik",
		'pt-br': "Eelektrik",
		'de-de': "Zapplalek"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		603,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
		'es-es': "Tynamo",
		'it-it': "Tynamo",
		'pt-br': "Tynamo",
		'de-de': "Zapplardin"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'fr-fr': "Régénération α",
				'en-us': "α Recovery",
				'es-es': "{title}:",
				'it-it': "{title}:",
				'pt-br': "{title}:",
				'de-de': "{title}:"
			},
			effect: {
				'fr-fr': "Lorsque ce Pokémon est soigné, doublez la quantité de soins.",
				'en-us': "When this Pokémon is healed, double the amount healed.",
				'es-es': "{title}: Cuando este Pokémon sea curado, dobla la cantidad curada.",
				'it-it': "{title}: Quando curi questo Pokémon, raddoppia la quantità di danni che stai curando.",
				'pt-br': "{title}: Quando este Pokémon for curado, dobre a quantidade curada.",
				'de-de': "{title}: Wenn dieses Pokémon geheilt wird, verdoppele die geheilten Schadenspunkte."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
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
				'pt-br': "Jogue uma moeda. Se sair cara, esse ataque causará 20 de danos adicionais. Se sair coroa, o Pokémon causará 20 de danos a ele mesmo.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu. Bei \"Zahl\" fügt sich dieses Pokémon selbst 20 Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "These Pokémon have a big appetite. When they spot their prey, they attack it and paralyze it with electricity.",
	},

	thirdParty: {
		cardmarket: 273594,
		tcgplayer: 95962
	}
}

export default card
