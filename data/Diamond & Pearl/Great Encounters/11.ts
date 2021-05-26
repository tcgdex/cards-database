import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Togekiss",
		fr: "Togekiss",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		468,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Togetic",
		fr: "Togetic",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Serene Grace",
				fr: "Sérénité",
			},
			effect: {
				en: "Once during your turn, when you play Togekiss from your hand to evolve 1 of your Pokémon, you may look at the top 10 cards of your deck, choose as many basic Energy cards as you like, and attach them to your Pokémon in any way you like. Put the other cards back on top of your deck. Shuffle your deck afterward.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Togekiss de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez regarder les 10 cartes du dessus de votre deck. Choisissez autant de cartes Énergie de base que vous voulez et attachez-les à vos Pokémon de la façon que vous voulez. Replacez les autres cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Scroll",
				fr: "Rouleau-air",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage. If tails, remove 3 damage counters from Togekiss.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires. Si c'est pile, retirez à Togekiss 3 marqueurs de dégât.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
