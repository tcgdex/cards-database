import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Carracosta",
		fr: "Mégapagos"
	},

	illustrator: "match",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [565],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Tirtouga",
		fr: "Carapagos"
	},

	description: {
		en: "This Pokémon emerges from the water in search\nof prey despite the fact that it moves more\nslowly on land."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Blocking Shell",
			fr: "Carapace Bloquante"
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from Basic Pokémon during your opponent's next turn.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon de base pendant le prochain tour de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card