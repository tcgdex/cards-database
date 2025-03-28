import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Uxie"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "Known as \"The Being of Knowledge.\" It is said that it can wipe out the memory of those who see its eyes."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mind Boost"
		},

		damage: 20,
		cost: ["Psychic"],

		effect: {
			en: "Take a <span class=\"energy-text energy-text--type-psychic\"></span> Energy from your Energy Zone and attach it to <a class=\"localized-string__link\" href=\"/pokemon/mesprit/\">Mesprit</a> or <a class=\"localized-string__link\" href=\"/pokemon/azelf/\">Azelf</a>."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card
