import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Corsola",
		fr: "Corayon de Galar"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "Watch your step when wandering areas oceans\nonce covered. What looks like a stone could be\nthis Pokémon, and it will curse you if you kick it.",
		fr: "Ce Pokémon est commun dans les lieux qui étaient jadis submergés. Il maudit quiconque le prend pour un caillou et le pousse du pied."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge"
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