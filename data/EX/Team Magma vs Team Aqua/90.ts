import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Cradily ex",
		fr: "Vacilys ex",
		de: "Wielie ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		346,
	],

	hp: 150,

	types: [
		"Grass",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Primal Vibes",
				fr: "Vibrations primales",
				de: "Primal Vibes"
			},
			effect: {
				en: "As long as Cradily ex is your Active Pokémon, your opponent can't play a Pokémon from his or her hand to evolve his or her Active Pokémon.",
				fr: "Tant que Vacilys ex est votre Pokémon Actif, votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer ses Pokémon Actifs.",
				de: "As long as Cradily ex is your Acrive Pokémon, your opponent can't play a Pokémon from his or her hand to evolve his or her Active Pokémon"
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
				en: "Eerie Light",
				fr: "Lumière étrange",
				de: "Eerie Light"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "The Defending Pokémon is now Confused."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Acidic Poison",
				fr: "Poison acide",
				de: "Acidic Poison"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned and Burned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné et Brûlé.",
				de: "The Defending Pokémon is now Poisoned and Burned."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276067,
		tcgplayer: 84457
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
