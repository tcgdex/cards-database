import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Moltres",
		'fr-fr': "Sulfura",
		'es-es': "Moltres",
		'it-it': "Moltres",
		'pt-br': "Moltres",
		'de-de': "Lavados"
	},

	illustrator: "OOYAMA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		146,
	],

	hp: 120,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Combustion",
				'fr-fr': "Fournaise",
				'es-es': "Combustión",
				'it-it': "Fuoco Continuo",
				'pt-br': "Combustão",
				'de-de': "Glühen"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flying Flare",
				'fr-fr': "Flamboiement Volant",
				'es-es': "Llama Voladora",
				'it-it': "Fiammata Volante",
				'pt-br': "Chama Voadora",
				'de-de': "Fliegende Fackel"
			},
			effect: {
				'en-us': "You may do 40 more damage. If you do, this Pokémon does 20 damage to itself.",
				'fr-fr': "Vous pouvez infliger 40 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
				'es-es': "Puedes hacer 40 puntos de daño más. Si lo haces, este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Puoi infliggere 40 danni in più. Se lo fai, questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Você pode causar 40 de danos adicionais. Se fizer isso, este Pokémon causará 20 de danos a ele mesmo.",
				'de-de': "Du kannst mit diesem Angriff 40 weitere Schadenspunkte zufügen. Wenn du das machst, fügt dieses Pokémon sich selbst 20 Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "One of the legendary bird Pokémon. It is said that its appearance indicates the coming of spring.",
	},

	thirdParty: {
		cardmarket: 289835,
		tcgplayer: 117772
	}
}

export default card
