import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Koko ex",
		es: "Tapu Koko ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [785],
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Plasma Hurricane",
			es: "Huracán Plasma"
		},

		damage: 20,
		cost: ["Lightning"],

		effect: {
			en: "Take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
			es: "Une 1 Energía {L} de tu área de Energía a este Pokémon."
		}
	},
	{
		name: {
			en: "Mach Bolt",
			es: "Rayo Mach"
		},

		damage: 90,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card