import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Silvally",
		fr: "Silvallié"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [773],
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		en: "Type: Null"
	},

	description: {
		en: "This is its form once it has awakened and\nevolved. Freed from its heavy mask, its speed is\ngreatly increased.",
		fr: "Il a réveillé tout son potentiel et a évolué. Briser son lourd masque a décuplé sa vitesse."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Brave Buddies",
			fr: "Copains Courageux"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "If you played a Supporter card from your hand during this turn, this attack does 50 more damage.",
			fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 50 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card