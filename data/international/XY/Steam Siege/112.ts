import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "M Gardevoir EX",
		'fr-fr': "M-Gardevoir EX",
		'es-es': "M-Gardevoir EX",
		'it-it': "M Gardevoir EX",
		'pt-br': "M-Gardevoir EX",
		'de-de': "M-Guardevoir EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 210,

	types: [
		"Fairy",
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gardevoir-EX",
		'fr-fr': "Gardevoir-EX",
		'es-es': "Gardevoir-EX",
		'it-it': "Gardevoir-EX",
		'pt-br': "Gardevoir-EX",
		'de-de': "Guardevoir-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Despair Ray",
				'fr-fr': "Rayon Désespoir",
				'es-es': "Rayo de Desesperanza",
				'it-it': "Disperaggio",
				'pt-br': "Raio do Desespero",
				'de-de': "Verzweifelter Strahl"
			},
			effect: {
				'en-us': "Discard as many of your Benched Pokémon as you like. This attack does 10 more damage for each Benched Pokémon you discarded in this way.",
				'fr-fr': "Défaussez autant de vos Pokémon de Banc que vous voulez. Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon de Banc défaussé de cette façon.",
				'es-es': "Descarta tantos Pokémon de tu Banca como quieras. Este ataque hace 10 puntos de daño más por cada Pokémon de tu Banca descartado de esta manera.",
				'it-it': "Scarta a piacimento i tuoi Pokémon in panchina. Questo attacco infligge 10 danni in più per ogni Pokémon in panchina scartato in questo modo.",
				'pt-br': "Descarte tantos Pokémon no seu Banco quanto desejar. Este ataque causa 10 de danos adicionais para cada Pokémon no Banco descartado desta forma.",
				'de-de': "Lege beliebig viele Pokémon von deiner Bank auf deinen Ablagestapel. Dieser Angriff fügt 10 weitere Schadenspunkte für jedes Pokémon auf der Bank zu, das du auf diese Weise auf deinen Ablagestapel gelegt hast."
			},
			damage: "110+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 121236
	}
}

export default card
