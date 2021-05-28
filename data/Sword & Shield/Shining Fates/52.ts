import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Évoli",
		en: "Eevee"
	},

	illustrator: "so-taro",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Signes d’Évolution",
			en: "Signs of Evolution"
		},

		effect: {
			fr: "Cherchez dans votre deck une carte Évolution d’Évoli, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			en: "Search your deck for a card that evolves from Eevee, reveal it, and put it into your hand. Then, shuffle your deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Coup Déchaîné",
			en: "Wild Kick"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			en: "Flip a coin. If tails, this attack does nothing."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card