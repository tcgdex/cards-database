import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Rotom"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "Its electricity-like body can enter some kinds<br />of machines and take control in order to make<br />mischief."
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
			en: "Dash Attack"
		},

		cost: ["Colorless"],

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card