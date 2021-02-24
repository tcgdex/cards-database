import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Shiinotic",
		fr: "Lampignon",
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		756,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Morelull",
		fr: "Spododo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Illuminate",
				fr: "Lumiattirance",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Grass Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Grass dans votre deck, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Flickering Spores",
				fr: "Spores Scintillantes",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
