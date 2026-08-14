import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Oricorio",
		fr: "Plumeline"
	},

	illustrator: "whomor Inc.",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [741],
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "This form of Oricorio has sipped yellow nectar.\nIt uses nimble steps to approach opponents,\nthen knocks them out with electric punches.",
		fr: "Ce Plumeline a bu du Nectar Jaune. Il s'approche\\nprestement de ses adversaires en dansant et les\\nmet K.O. en leur assénant des coups électriques."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Safeguard",
			fr: "Rune Protect"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon ex.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-ex de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			en: "Zzzap",
			fr: "Zzzap"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-gyarados"]
}

export default card