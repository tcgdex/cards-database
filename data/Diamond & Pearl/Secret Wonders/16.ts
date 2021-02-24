import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Raikou",
		fr: "Raikou",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		243,
	],
	hp: 80,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Thunder Rumble",
				fr: "Roulement de tonnerre",
			},
			effect: {
				en: "Once during your turn (before your attack), when you attach a Lightning Energy card from your hand to Raikou, you may put 1 damage counter on 1 of your opponent's Benched Pokémon.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous attachez une carte Énergie Lightning de votre main à Raikou, vous pouvez placer 1 marqueur de dégât sur 1 des Pokémon de Banc de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunder Climb",
				fr: "Tonnerre grimpant",
			},
			effect: {
				en: "Discard 3 cards from the top of your deck. This attack does 50 damage plus 10 more damage for each Lightning Energy card you discarded. Then, attach those Lightning Energy cards to 1 of your Pokémon.",
				fr: "Défaussez 3 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie Lightning défaussée. Ensuite, attachez ces cartes Énergie Lightning à 1 de vos Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
