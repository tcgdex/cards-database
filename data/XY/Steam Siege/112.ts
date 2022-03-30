import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "M Gardevoir EX",
		fr: "M-Gardevoir EX",
		es: "M-Gardevoir EX",
		it: "M Gardevoir EX",
		pt: "M-Gardevoir EX",
		de: "M-Guardevoir EX"
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
		en: "Gardevoir-EX",
		fr: "Gardevoir-EX",
		es: "Gardevoir-EX",
		it: "Gardevoir-EX",
		pt: "Gardevoir-EX",
		de: "Guardevoir-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Despair Ray",
				fr: "Rayon Désespoir",
				es: "Rayo de Desesperanza",
				it: "Disperaggio",
				pt: "Raio do Desespero",
				de: "Verzweifelter Strahl"
			},
			effect: {
				en: "Discard as many of your Benched Pokémon as you like. This attack does 10 more damage for each Benched Pokémon you discarded in this way.",
				fr: "Défaussez autant de vos Pokémon de Banc que vous voulez. Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon de Banc défaussé de cette façon.",
				es: "Descarta tantos Pokémon de tu Banca como quieras. Este ataque hace 10 puntos de daño más por cada Pokémon de tu Banca descartado de esta manera.",
				it: "Scarta a piacimento i tuoi Pokémon in panchina. Questo attacco infligge 10 danni in più per ogni Pokémon in panchina scartato in questo modo.",
				pt: "Descarte tantos Pokémon no seu Banco quanto desejar. Este ataque causa 10 de danos adicionais para cada Pokémon no Banco descartado desta forma.",
				de: "Lege beliebig viele Pokémon von deiner Bank auf deinen Ablagestapel. Dieser Angriff fügt 10 weitere Schadenspunkte für jedes Pokémon auf der Bank zu, das du auf diese Weise auf deinen Ablagestapel gelegt hast."
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
	suffix: "EX"
}

export default card
