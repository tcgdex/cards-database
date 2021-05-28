import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Salazzle",
		fr: "Malamandre"
	},

	illustrator: "Shibuzoh.",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		en: "Salandit",
		fr: "Tritox"
	},

	attacks: [{
		name: {
			en: "Perplex",
			fr: "Affolement"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
		},

		cost: ["Fire"]
	}, {
		name: {
			en: "Derisive Roasting",
			fr: "Raillerie Roussie"
		},

		effect: {
			en: "This attack does 90 damage for each Special Condition affecting your opponent’s Active Pokémon.",
			fr: "Cette attaque inflige 90 dégâts pour chaque État Spécial affectant le Pokémon Actif de votre adversaire."
		},

		damage: "90×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card