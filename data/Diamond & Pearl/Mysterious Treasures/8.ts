import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		160,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Croconaw",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Energy Cyclone",
				fr: "Énergie Tourbillon"
			},
			effect: {
				en: "Choose as many Energy cards from your hand as you like and show them to your opponent. This attack does 20 damage times the number of Energy cards you chose. Put those Energy cards on top of your deck. Shuffle your deck afterward.",
				fr: "Choisissez autant de cartes Énergie de votre main que vous voulez et montrez-les à votre adversaire. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes Énergie choisies. Placez ces cartes au dessus de votre deck. Ensuite, mélangez votre deck."
			},
			damage: "20×",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Breaking Tail",
				fr: "Queue brisante"
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking and discard it.",
				fr: "Choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	description: {
		fr: "Ce Pokémon à l'air pataud est capable d'attaquer à la vitesse de l'éclair pour mordre sa proie."
	}
}

export default card
