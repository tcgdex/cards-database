import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Spinda",
		fr: "Spinda"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [327],
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "Each Spinda's spot pattern is different. With its\nstumbling movements, it evades opponents'\nattacks brilliantly!"
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dizzying Headbutt",
			fr: "Coup d'Boule Désorienté"
		},

		damage: 30,
		cost: ["Colorless"],

		effect: {
			en: "Both Active Pokémon are now Confused.",
			fr: "Les deux Pokémon Actifs sont maintenant Confus."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card