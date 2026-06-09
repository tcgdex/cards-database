import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Slaking",
		fr: "Monaflemit",
		de: "Letarking"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		289,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Vigoroth",
		fr: "Vigoroth"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lazy",
				fr: "Fainéant",
				de: "Lazy"
			},
			effect: {
				en: "As long as Slaking is your Active Pokémon, your opponent's Pokémon can't use any Poké-Powers.",
				fr: "Tant que Monaflemit est votre Pokémon Actif, le Pokémon de votre adversaire ne peut utiliser de Poké-Powers.",
				de: "As long as Slaking is your Active Pokémon, your opponent's Pokémon can't use any Poké-Powers."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Critical Move",
				fr: "Mouvement décisif",
				de: "Critical Move"
			},
			effect: {
				en: "Discard a basic Energy card attached to Slaking or this attack does nothing. Slaking can't attack during your next turn.",
				fr: "Défaussez une carte Énergie de base attachée à Monaflemit ou cette attaque est sans effet. Monaflemit ne pourra pas attaquer pendant votre prochain tour.",
				de: "Discard a basic Energy card attached to Slaking or this attack does nothing. Slaking can't attack during your next turn."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 3,

	thirdParty: {
		cardmarket: 275660,
		tcgplayer: 89288
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
	]
}

export default card
