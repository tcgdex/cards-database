import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Heatran"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		en: "It dwells in volcanic caves. It digs in with its<br />cross-shaped feet to crawl on ceilings and walls."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Speed Link"
		},

		effect: {
			en: "If you have <a class=\"localized-string__link\" href=\"/pokemon/arceus/\">Arceus</a> or <a class=\"localized-string__link\" href=\"/pokemon/arceus-ex/\">Arceus ex</a> in play, this Pokémon has no Retreat Cost."
		}
	}],

	attacks: [{
		name: {
			en: "Ragin' Mad Strike"
		},

		damage: 40,
		cost: ["Fire", "Fire"],

		effect: {
			en: "If this Pokémon has damage on it, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3
}

export default card