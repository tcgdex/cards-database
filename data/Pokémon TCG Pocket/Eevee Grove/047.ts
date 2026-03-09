import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Mawile",
		fr: "Mysdibule"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [303],
	hp: 70,
	types: ["Metal"],

	description: {
		en: "It uses its docile-looking face to lull foes into\ncomplacency, then bites with its huge,\nrelentless jaws.",
		fr: "Trompés par son visage innocent, ses ennemis se font happer par ses énormes mâchoires et ne peuvent plus s'échapper."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Powerful Vise",
			fr: "Étau Costaud"
		},

		damage: 30,
		cost: ["Metal", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card