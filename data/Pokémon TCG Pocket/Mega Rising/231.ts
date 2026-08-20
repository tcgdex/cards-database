import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Chandelure",
		fr: "Lugulabre"
	},

	illustrator: "REND",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [609],
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux"
	},

	description: {
		en: "In homes illuminated by Chandelure instead of\nlights, funerals were a constant occurrence—\nor so it's said."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Slow Sear",
			fr: "Combustion Lente"
		},

		effect: {
			en: "Once during your turn, you may discard the top card of your opponent's deck.",
			fr: "Une fois pendant votre tour, vous pouvez défausser la première carte du dessus du deck de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur"
		},

		damage: 80,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card