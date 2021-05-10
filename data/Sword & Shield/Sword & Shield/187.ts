import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Dhelmise V",
		fr: "Sinistrail V",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 220,

	types: [
		"Grass",
	],

	suffix: "V",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Anchor Anger",
				fr: "Colère Ancrée",
			},
			effect: {
				en: "If any of your Grass Pokémon were Knocked Out by damage from an opponent’s attack during their last turn, this attack does 90 more damage.",
				fr: "Si l’un de vos Pokémon Grass a été mis K.O. par les dégâts d’une attaque de votre adversaire lors de son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: "30+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Giga Hammer",
				fr: "Giga Marteau",
			},
			effect: {
				en: "During your next turn, this Pokémon can't use Giga Hammer.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Giga Marteau.",
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
