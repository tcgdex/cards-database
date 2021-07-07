import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Lopunny",
		fr: "Lockpin",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		428,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Buneary",
		fr: "Laporeille",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Big Jump",
				fr: "Grand Saut",
			},
			effect: {
				en: "Once during your turn (before your attack), you may return this Pokémon and all cards attached to it to your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez reprendre ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
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
				en: "Sitdown Bounce",
				fr: "Rebond Ressort",
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon can’t attack during your next turn.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
