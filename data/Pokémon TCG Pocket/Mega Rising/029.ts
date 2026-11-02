import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine",
		fr: "Arcanin"
	},

	illustrator: "Yuu Nishida",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [59],
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos"
	},

	description: {
		en: "Its magnificent bark conveys a sense of majesty.\nAnyone hearing it can't help but grovel before it."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fire Fang",
			fr: "Crocs Feu"
		},

		damage: 50,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-blaziken"]
}

export default card