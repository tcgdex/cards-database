import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Emolga",
		fr: "Emolga",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		587,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Nuzzly Gathering",
				fr: "Rassemblement Frimousse",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Pokémon that has the Nuzzle attack, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher dans votre deck un Pokémon avec l’attaque Frotte-Frimousse, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Nuzzle",
				fr: "Frotte-Frimousse",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
