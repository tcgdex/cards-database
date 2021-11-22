import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Flygon ex",
		fr: "Libegon ex"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 150,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vibrava",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Psychic Protector",
				fr: "Protecteur psy"
			},
			effect: {
				en: "If Flygon ex is damaged by an opponent's attack, you may discard up to 4 cards from your hand. If you do, any damage done to Flygon ex is reduced by 10 for each card you discarded.",
				fr: "Si une attaque de votre adversaire inflige des dégâts à Libegon ex, vous pouvez défausser jusqu'à 4 cartes de votre main. Tous dégâts infligés alors à Libegon ex sont réduits de 10 pour chaque carte défaussée."
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
				en: "Slashing Strike",
				fr: "Coup déchirant"
			},
			effect: {
				en: "Flip a coin. If tails, Flygon ex can't use Slashing Strike during your next turn.",
				fr: "Lancez une pièce. Si c'est pile, Libegon ex ne peut pas utiliser Coup déchirant lors de votre prochain tour."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
