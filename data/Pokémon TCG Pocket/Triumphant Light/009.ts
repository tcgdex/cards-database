import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Carnivine"
	},

	illustrator: "Shiburingaru",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		en: "It attracts prey with its sweet-smelling saliva, then<br />chomps down. It takes a whole day to eat prey."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Power Link"
		},

		effect: {
			en: "If you have <a class=\"localized-string__link\" href=\"/pokemon/arceus/\">Arceus</a> or <a class=\"localized-string__link\" href=\"/pokemon/arceus-ex/\">Arceus ex</a> in play, attacks used by this Pokémon do +30 damage to your opponent's Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Vine Whip"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card