import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Decidueye"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Dartrix"
	},

	description: {
		en: "It nocks its arrow quills and shoots them at\nopponents. When it simply can't afford to miss,\nit tugs the vine on its head to improve its focus."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Sniping Arrow"
		},

		cost: ["Grass", "Grass"],

		effect: {
			en: "This attack does 70 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card