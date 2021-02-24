import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magnéton",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magnemite",
		fr: "Magnéti",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Call Signal",
				fr: "Signal d’Appel",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for up to 3 Supporter cards, reveal them, and put them into your hand. Then, shuffle your deck. If you searched your deck in this way, this Pokémon is Knocked Out.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher jusqu’à 3 cartes Supporter dans votre deck, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck. Si vous avez cherché votre deck de cette façon, ce Pokémon est mis K.O.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Magnetic Blast",
				fr: "Explosion Magnétique",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
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
