import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Klinklang",
		fr: "Cliticlic"
	},

	illustrator: "Akira Komayama",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		en: "Klang"
	},

	description: {
		en: "From its spikes, it launches powerful blasts of\nelectricity. Its red core contains an enormous\namount of energy.",
		fr: "Il peut envoyer de terribles décharges électriques de la pointe de ses pics. Il accumule de grandes quantités d'énergie dans son noyau rouge."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Gear Spinner",
			fr: "Tourne Rouage"
		},

		damage: 70,
		cost: ["Metal", "Metal", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon's Gear Spinner attack does +70 damage.",
			fr: "Pendant votre prochain tour, l'attaque Tourne Rouage de ce Pokémon inflige + 70 dégâts."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh"]
}

export default card