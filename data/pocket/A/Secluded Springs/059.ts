import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Igglybuff",
		fr: "Toudoudou"
	},

	illustrator: "Miki Tanaka",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [174],
	hp: 30,
	types: ["Colorless"],

	description: {
		en: "Its body has a faintly sweet scent and is bouncy\nand soft. If it bounces even once, it cannot stop.",
		fr: "Son corps mou dégage un parfum sucré. Quand il commence à rebondir, on ne peut plus l'arrêter."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sleepy Lullaby",
			fr: "Comptine qui Endort"
		},

		damage: 10,

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card