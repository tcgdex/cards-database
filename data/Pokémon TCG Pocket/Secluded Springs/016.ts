import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Tentacruel",
		fr: "Tentacruel"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [73],
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Tentacool"
	},

	description: {
		en: "When the red orbs on Tentacruel's head glow\nbrightly, watch out. The Pokémon is about to\nfire off a burst of ultrasonic waves.",
		fr: "Il faut faire attention lorsque les globes rouges sur sa tête se mettent à briller intensément, car c'est qu'il s'apprête à émettre des ultrasons."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Stun Poison",
			fr: "Poison Neural"
		},

		damage: 50,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned and Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné et Paralysé."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card