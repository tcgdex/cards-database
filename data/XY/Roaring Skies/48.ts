import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Klefki",
		fr: "Trousselin",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		707,
	],
	hp: 60,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Look for Keys",
				fr: "Recherch'Clés",
			},
			effect: {
				en: "Reveal cards from the top of your deck until you reveal an Item card. Put it into your hand. Shuffle the other cards back into your deck.",
				fr: "Montrez des cartes du dessus de votre deck jusqu'à ce que vous montriez une carte Objet. Ajoutez-la à votre main. Mélangez les autres cartes avec votre deck.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Play Rough",
				fr: "Câlinerie",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

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



}

export default card
