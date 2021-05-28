import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Sinistrail V",
		en: "Dhelmise V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Colère Ancrée",
			en: "Anchor Anger"
		},

		effect: {
			fr: "Si l’un de vos Pokémon Grass a été mis K.O. par les dégâts d’une attaque de votre adversaire lors de son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
			en: "If any of your Grass Pokémon were Knocked Out by damage from an opponent’s attack during their last turn, this attack does 90 more damage."
		},

		damage: "30+",
		cost: ["Grass"]
	}, {
		name: {
			fr: "Giga Marteau",
			en: "Giga Hammer"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Giga Marteau.",
			en: "During your next turn, this Pokémon can’t use Giga Hammer."
		},

		damage: 200,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card