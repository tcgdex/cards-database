import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		it: "Charmander",
		pt: "Charmander",
		de: "Glumanda"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 70,

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
				en: "Draw In",
				fr: "Aspiracartes",
				de: "Ansaugen"
			},
			effect: {
				en: "Attach 2 Fire Energy cards from your discard pile to this Pokémon.",
				fr: "Attachez 2 cartes Énergie Fire de votre pile de défausse à ce Pokémon.",
				de: "Lege 2 {R}-Energiekarten von deinem Ablagestapel an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare",
				fr: "Flamboiement",
				de: "Flackern"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.",
		de: "Lodert die Flamme auf seiner Schweifspitze hell, ist Glumanda gesund."
	},

	thirdParty: {
		cardmarket: 280605,
		tcgplayer: 84218
	}
}

export default card
