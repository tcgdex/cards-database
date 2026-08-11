import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zoroark",
		'fr-fr': "Zoroark"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [571],
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Zorua"
	},

	description: {
		'en-us': "Stories say those who tried to catch Zoroark were\ntrapped in an illusion and punished.",
		'fr-fr': "On dit que ceux qui osent tenter de le capturer restent prisonniers des paysages illusoires qu'il peut créer."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Illusive Trickery",
			'fr-fr': "Ruse Illusoire"
		},

		effect: {
			'en-us': "If your opponent's Pokémon is Knocked Out by damage from this Pokémon's attacks, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
			'fr-fr': "Si le Pokémon de votre adversaire est mis K.O. par les dégâts des attaques de ce Pokémon, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Night Daze",
			'fr-fr': "Explonuit"
		},

		damage: 70,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card