import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Serperior"
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Servine"
	},

	description: {
		en: "It only gives its all against strong opponents who are not fazed by the glare from Serperior's noble eyes."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Jungle Totem"
		},

		effect: {
			en: "Each [Grass] Energy attached to your [Grass] Pokémon provides 2 [Grass] Energy. This effect doesn't stack."
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

	retreat: 2,
	rarity: "One Star"
}

export default card
