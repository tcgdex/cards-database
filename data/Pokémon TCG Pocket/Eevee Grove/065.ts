import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Greedent",
		fr: "Rongrigou"
	},

	illustrator: "kirisAki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		en: "Skwovet"
	},

	description: {
		en: "This Pokémon makes off with heaps of fallen berries by wrapping\nthem in its tail, which is roughly twice the length of its body.",
		fr: "Sa queue, qui est environ deux fois plus longue que son corps, lui permet d'emmagasiner et de transporter les Baies tombées des arbres."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Enhanced Fang",
			fr: "Croc Amélioré"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card