import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
		de: "Vulnona"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Heat Acceleration",
				fr: "Accélération ardente",
				de: "Hitze marsch!"
			},
			effect: {
				en: "Search your discard pile for up to 3 Fire Energy cards and attach them to 1 of your Pokémon.",
				fr: "Cherchez dans votre pile de défausse jusqu’à 3 cartes Énergie Fire et attachez-les à l’un de vos Pokémon.",
				de: "Durchsuche deinen Ablagestapel nach bis zu 3 -Energiekarten und lege sie an 1 deiner Pokémon an."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Searing Flame",
				fr: "Flammes calcinantes",
				de: "Sengende Flammen"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Some legends claim that each of its nine tails has its own unique type of special mystical power."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
	],
	thirdParty: {
		cardmarket: 279176,
		tcgplayer: 87776
	}
}

export default card
