import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Togekiss",
		fr: "Togekiss",
		es: "Togekiss",
		it: "Togekiss",
		pt: "Togekiss",
		de: "Togekiss"
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
		en: "Togetic",
		fr: "Togetic",
		es: "Togetic",
		it: "Togetic",
		pt: "Togetic",
		de: "Togetic"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				en: "Δ Evolution",
				fr: "Évolution Δ",
			},
			effect: {
				en: "You may play this card from your hand to evolve a Pokémon during your first turn or the turn you play that Pokémon.",
				fr: "Vous pouvez jouer cette carte de votre main pour faire évoluer un Pokémon pendant votre premier tour ou pendant le tour où vous le jouez.",
			},
		},
		{
			type: "Ability",
			name: {
				en: "Serene Grace",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may look at the top 8 cards of your deck. Choose any basic Energy cards you find there and attach them to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
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
				en: "Fairy Wind",
				fr: "Vent Féérique",
				es: "Viento Feérico",
				it: "Vento di Fata",
				pt: "Vento de Fada",
				de: "Feenbrise"
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

	thirdParty: {
		cardmarket: 282713
	}
}

export default card
