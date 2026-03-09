import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Bellossom",
		fr: "Joliflor"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [182],
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Gloom"
	},

	description: {
		en: "Plentiful in the tropics. When it dances, its petals\nrub together and make a pleasant ringing sound.",
		fr: "Ce Pokémon vit en nombre dans les tropiques. Quand il danse, ses pétales frottent les uns contre les autres et émettent un son mélodieux."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Petal Dance",
			fr: "Danse Fleurs"
		},

		damage: 60,
		cost: ["Grass", "Grass"],

		effect: {
			en: "Flip 3 coins. This attack does 60 damage for each heads. This Pokémon is now Confused.",
			fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face. Ce Pokémon est maintenant Confus."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card