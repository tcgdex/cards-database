import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Charizard δ",
		fr: "Dracaufeu δ"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 120,
	types: [
		"Lightning",
		"Metal",
	],
	evolveFrom: {
		en: "Charmeleon",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Peal of Thunder",
				fr: "Coup de tonnerre"
			},
			effect: {
				en: "Once during your turn, when you play Charizard from your hand to evolve 1 of your Pokémon, you may look at the top 5 cards of your deck, choose as many Energy cards as you like, and attach them to 1 of your Pokémon. Discard the other cards.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Dracaufeu de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez regarder les 5 cartes du dessus de votre deck, choisir autant de cartes Énergie que vous voulez et les attacher à 1 de vos Pokémon. Ensuite, défaussez les autres cartes."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Burn",
				fr: "Brûlure métallique"
			},
			effect: {
				en: "Discard all Metal Energy attached to Charizard.",
				fr: "Défaussez toutes les Énergies  attachées à Dracaufeu."
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
