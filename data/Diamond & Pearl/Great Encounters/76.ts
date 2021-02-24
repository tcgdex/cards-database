import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Lunatone",
		fr: "Seleroc",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		337,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Gravity Change",
				fr: "Changement de gravité",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a card from your hand. Then, if you have Solrock in play, draw a card. This power can't be used if Lunatone is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Ensuite, si vous avez Solaroc en jeu, piochez une carte. Ce pouvoir ne peut pas être utilisé si Seleroc est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Knock Over",
				fr: "Culbute",
			},
			effect: {
				en: "You may discard any Stadium card in play.",
				fr: "Vous pouvez défausser n'importe quelle carte Stade en jeu.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
