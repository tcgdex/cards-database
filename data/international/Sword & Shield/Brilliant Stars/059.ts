import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [344],
	set: Set,

	name: {
		'en-us': "Claydol",
		'fr-fr': "Kaorine",
		'es-es': "Claydol",
		'it-it': "Claydol",
		'pt-br': "Claydol",
		'de-de': "Lepumentas"
	},

	illustrator: "Kazuma Koda",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
		'es-es': "Baltoy",
		'it-it': "Baltoy",
		'pt-br': "Baltoy",
		'de-de': "Puppance"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'de-de': "Rundumangriff"
		},

		damage: 40
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Coinciding Figures",
			'fr-fr': "Caractères Correspondants",
			'es-es': "Figuras Coincidentes",
			'it-it': "Statue Identiche",
			'pt-br': "Figuras Espelhadas",
			'de-de': "Übereinstimmende Zahlen"
		},

		effect: {
			'en-us': "If you and your opponent have the same number of Benched Pokémon, this attack does 90 more damage.",
			'fr-fr': "Si vous avez le même nombre de Pokémon de Banc que votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si tu rival y tú tenéis la misma cantidad de Pokémon en Banca, este ataque hace 90 puntos de daño más.",
			'it-it': "Se tu e il tuo avversario avete lo stesso numero di Pokémon in panchina, questo attacco infligge 90 danni in più.",
			'pt-br': "Se você e o seu oponente tiverem o mesmo número de Pokémon no Banco, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn du genauso viele Pokémon auf der Bank hast wie dein Gegner, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "This mysterious Pokémon started life as an ancient clay figurine made over 20,000 years ago.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608509,
				tcgplayer: 263775
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608509,
				tcgplayer: 263775
			}
		},
	],
}

export default card
