import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross",
	},
	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		121,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Space Beacon",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, put 2 basic Energy cards from your discard pile into your hand. (You can't choose a card you discarded with the effect of this Ability.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Star Freeze",
				fr: "Talent : Lumière Spatiale",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Dans ce cas, prenez 2 cartes Énergie de base dans votre pile de défausse et ajoutez-les à votre main. (Vous ne pouvez pas choisir une carte que vous avez défaussée du fait de l'effet de ce talent.)",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				fr: "Étoile Gelante",
			},
			effect: {
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
