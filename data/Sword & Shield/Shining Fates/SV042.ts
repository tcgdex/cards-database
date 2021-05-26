import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Salarsen"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Toxizap"
	},

	attacks: [{
		name: {
			fr: "Tête Brûlée"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, défaussez les 5 cartes du dessus du deck de votre adversaire. Si c’est pile, défaussez les 5 cartes du dessus de votre deck."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Secousse Tonnerre"
		},

		effect: {
			fr: "Ce Pokémon s’inflige aussi 30 dégâts."
		},

		damage: 160,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card