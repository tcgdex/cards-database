import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Misdreavus",
		fr: "Feuforêve"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [200],
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "This Pokémon startles people in the middle of\nthe night. It gathers fear as its energy.",
		fr: "Il fait peur aux gens en pleine nuit et se nourrit de leur frayeur."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Infiltrating Inspection",
			fr: "Inspection Insinuante"
		},

		effect: {
			en: "Once during your turn, when you put this Pokémon from your hand onto your Bench, you may have your opponent reveal their hand.",
			fr: "Une seule fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez demander à votre adversaire de dévoiler sa main."
		}
	}],

	attacks: [{
		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card