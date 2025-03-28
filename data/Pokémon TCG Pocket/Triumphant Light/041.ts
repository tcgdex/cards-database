import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Tyranitar"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		en: "Pupitar"
	},

	description: {
		en: "Extremely strong, it can change the landscape.<br />It is so insolent that it doesn't care about others."
	},

	stage: "Stage2",

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
			en: "Land Crush"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4
}

export default card