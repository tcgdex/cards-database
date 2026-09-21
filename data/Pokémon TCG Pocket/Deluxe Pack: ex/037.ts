import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Serperior"
	},

	illustrator: "Yoshioka",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Servine"
	},

	description: {
		en: "It only gives its all against strong opponents who\nare not fazed by the glare from Serperior's\nnoble eyes."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Jungle Totem"
		},

		effect: {
			en: "Each {G} Energy attached to your {G} Pokémon provides 2 {G} Energy. This effect doesn't stack."
		}
	}],

	attacks: [{
		name: {
			en: "Solar Beam"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card