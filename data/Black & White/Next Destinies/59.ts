import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Musharna",
		fr: "Mushana",
	},
	illustrator: "Maiko Fujiwara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		518,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Munna",
		fr: "Munna",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Forewarn",
				fr: "Prédiction",
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 2 cards of your deck, choose 1 of them, and put it into your hand. Put the other card back on top of your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 2 cartes du dessus de votre deck, en choisir 1 et l'ajouter à votre main. Replacez l'autre carte sur le dessus de votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Fluffy Dream",
				fr: "Rêve Douillet",
			},
			effect: {
				en: "This Pokémon is now Asleep.",
				fr: "Ce Pokémon est maintenant Endormi.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
