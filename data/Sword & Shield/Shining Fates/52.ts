import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Évoli"
	},

	illustrator: "so-taro",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Signes d’Évolution"
		},

		effect: {
			fr: "Cherchez dans votre deck une carte Évolution d’Évoli, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Coup Déchaîné"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card