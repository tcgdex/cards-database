import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Scolocendre VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		fr: "Scolocendre-V"
	},

	attacks: [{
		name: {
			fr: "Combustion G-Max"
		},

		effect: {
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie Fire attachée à ce Pokémon. Si vous avez infligé des dégâts avec cette attaque, vous pouvez attacher une carte Énergie Fire de votre pile de défausse à ce Pokémon."
		},

		damage: "40+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card