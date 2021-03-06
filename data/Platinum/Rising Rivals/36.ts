import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Walrein",
		fr: "Kaimorse Niv. 59",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		365,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Gather Ice",
				fr: "Groupement de glace",
			},
			effect: {
				en: "Once during your turn (before your attack), when you play Walrein from your hand to evolve 1 of your Pokémon, you may attach as many Water Energy cards from your hand to Walrein as you like.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous jouez Kaimorse de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez attacher autant de cartes Énergie Water de votre main sur Kaimorse que vous le voulez.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cold Crush",
				fr: "Écraser net",
			},
			effect: {
				en: "Discard an Energy card attached to Walrein and then discard an Energy card attached to the Defending Pokémon.",
				fr: "Défaussez une carte Énergie attachée à Kaimorse puis défaussez une carte Énergie attachée au Pokémon Défenseur.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+30"
		},
	],

	retreat: 4,



}

export default card
