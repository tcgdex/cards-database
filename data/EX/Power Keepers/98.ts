import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Skarmory ex",
		fr: "Airmure ex",
		de: "Panzaeron ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		227,
	],

	hp: 100,

	types: [
		"Metal",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Metal Gravity",
				fr: "Gravité métallique",
				de: "Metall-Anziehungskraft"
			},
			effect: {
				en: "If your opponent's Active Pokémon retreats and has 40 or more remaining HP, put 3 damage counters on that Pokémon. You can't use more than 1 Metal Gravity Poké-Body each turn.",
				fr: "Si le Pokémon Actif de votre adversaire bat en retraite et qu'il lui reste au moins 40 Points de vie, placez 3 marqueurs de dégât sur ce Pokémon. Vous ne pouvez pas utiliser plus d'1 Poké-Body Gravité métallique par tour.",
				de: "Wenn sich das Aktive Pokémon deines Gegners zurückzieht und 40 oder mehr verbliebene KP hat, lege 3 Schadensmarken auf dieses Pokémon. Du kannst nicht mehr als 1 Metall-Anziehungskraft Poké-Body pro Zug einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				fr: "Cyclone",
				de: "Wirbelwind"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				de: "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Razor Wing",
				fr: "Aile tranchante",
				de: "Rasierflügel"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277404,
		tcgplayer: 89247
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

