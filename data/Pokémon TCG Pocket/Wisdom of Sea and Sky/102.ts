import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Hitmontop",
		fr: "Kapoera"
	},

	illustrator: "Hisao Nakamura",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [237],
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "It launches kicks while spinning. If it spins at high\nspeed, it may bore its way into the ground.",
		fr: "Il assène des coups de pied tout en tournant sur lui-même. Il va parfois si vite qu'il commence à s'enfoncer dans le sol."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Piercing Spin",
			fr: "Pirouette Perçante"
		},

		damage: 20,
		cost: ["Fighting"],

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige aussi 20 dégâts à un des Pokémon de Banc de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh", "lugia"]
}

export default card