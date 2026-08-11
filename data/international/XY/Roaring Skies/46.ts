import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Togekiss",
		'fr-fr': "Togekiss",
		'es-es': "Togekiss",
		'it-it': "Togekiss",
		'pt-br': "Togekiss",
		'de-de': "Togekiss"
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		468,
	],

	hp: 130,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Togetic",
		'fr-fr': "Togetic",
		'es-es': "Togetic",
		'it-it': "Togetic",
		'pt-br': "Togetic",
		'de-de': "Togetic"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'en-us': "Δ Evolution",
				'fr-fr': "Évolution Δ",
			},
			effect: {
				'en-us': "You may play this card from your hand to evolve a Pokémon during your first turn or the turn you play that Pokémon.",
				'fr-fr': "Vous pouvez jouer cette carte de votre main pour faire évoluer un Pokémon pendant votre premier tour ou pendant le tour où vous le jouez.",
			},
		},
		{
			type: "Ability",
			name: {
				'en-us': "Serene Grace",
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may look at the top 8 cards of your deck. Choose any basic Energy cards you find there and attach them to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fairy Wind",
				'fr-fr': "Vent Féérique",
				'es-es': "Viento Feérico",
				'it-it': "Vento di Fata",
				'pt-br': "Vento de Fada",
				'de-de': "Feenbrise"
			},

			damage: 60,

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

	retreat: 1,

	description: {
		'en-us': "It shares many blessings with people who respect one another's rights and avoid needless strife.",
	},

	thirdParty: {
		cardmarket: 282713,
		tcgplayer: 98082
	}
}

export default card
