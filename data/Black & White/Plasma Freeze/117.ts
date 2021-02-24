import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		395,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Diving Draw",
				fr: "Plonge et Pioche",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 2 cards.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Dans ce cas, piochez 2 cartes.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Attack Command",
				fr: "Ordre d'Assaut",
			},
			effect: {
				en: "Does 10 damage times the number of Pokémon in play (both yours and your opponent's).",
				fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon en jeu (les vôtres et ceux de votre adversaire).",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
