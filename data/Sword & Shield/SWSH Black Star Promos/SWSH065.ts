import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Eevee V",
		fr: "Évoli V"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	hp: 190,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Collect",
			fr: "Collecte"
		},

		effect: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Brave Buddies",
			fr: "Copains Courageux"
		},

		effect: {
			en: "If you played a Supporter card from your hand during this turn, this attack does 80 more damage.",
			fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 80 dégâts supplémentaires."
		},

		damage: "80+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card