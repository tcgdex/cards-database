import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Koko ex",
		es: "Tapu Koko ex",
		de: "Kapu-Riki-ex"
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
			es: "Huracán Plasma",
			de: "Plasmaorkan"
		},

		damage: 20,
		cost: ["Lightning"],

		effect: {
			en: "Take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
			es: "Une 1 Energía {L} de tu área de Energía a este Pokémon.",
			de: "Lege 1 {L}-Energie aus deinem Energiebereich an dieses Pokémon an."
		}
	},
	{
		name: {
			en: "Mach Bolt",
			es: "Rayo Mach",
			de: "Flotter Sprung"
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