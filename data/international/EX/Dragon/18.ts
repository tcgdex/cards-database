import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Ninjask",
		'fr-fr': "Ninjask",
		'de-de': "Ninjask"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [291],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Nincada",
		'fr-fr': "Ningale"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Loose Shell",
				'fr-fr': "Carapace branlante",
				'de-de': "Loose Shell"
			},
			effect: {
				'en-us': "Once during your turn, when you play Ninjask from your hand to evolve 1 of your Pokémon, you may search your deck for Shedinja and put it onto your Bench. Treat the new Benched Pokémon as a Basic Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Une seule fois pendant votre tour, lorsque vous placez Ninjask de votre main sur un de vos Pokémon pour le faire évoluer, vous pouvez chercher Munja dans votre deck et le placer sur votre Banc. Traitez le nouveau Pokémon du Banc comme un Pokémon de base. Ensuite, mélangez votre deck.",
				'de-de': "Once during your turn, when you play Ninjask from your hand to evolve 1 of your Pokémon, you may search your deck for Shedinja and put it onto your Bench. Treat the new Benched Pokémon as a Basic Pokémon. Shuffle your deck afterward."
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
				'en-us': "Quick Touch",
				'fr-fr': "Touche rapide",
				'de-de': "Quick Touch"
			},
			effect: {
				'en-us': "You may switch Ninjask with 1 of your Benched Pokémon. If you do, you may move any number of Grass Energy cards attached to Ninjask to the new Active Pokémon.",
				'fr-fr': "Vous pouvez échanger Ninjask contre un des Pokémon de votre Banc. Vous pouvez alors attacher au nouveau Pokémon Actif autant de cartes Énergie  attachées à Ninjask que vous le voulez.",
				'de-de': "You may switch Ninjask with 1 of your Benched Pokémon. If you do, you may move any number of  Enegry cards attached to Ninjask to the new Active Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87783,
				cardmarket: 275895
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87783,
				cardmarket: 275895
			},
		},
	],

}

export default card
