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
			en: "Each <span class=\"energy-text energy-text--type-grass\"></span> Energy attached to your <span class=\"energy-text energy-text--type-grass\"></span> Pokémon provides 2 <span class=\"energy-text energy-text--type-grass\"></span> Energy. This effect doesn't stack."
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
