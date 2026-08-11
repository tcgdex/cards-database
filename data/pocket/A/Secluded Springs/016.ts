import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tentacruel",
		'fr-fr': "Tentacruel"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [73],
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Tentacool"
	},

	description: {
		'en-us': "When the red orbs on Tentacruel's head glow\nbrightly, watch out. The Pokémon is about to\nfire off a burst of ultrasonic waves.",
		'fr-fr': "Il faut faire attention lorsque les globes rouges sur sa tête se mettent à briller intensément, car c'est qu'il s'apprête à émettre des ultrasons."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Stun Poison",
			'fr-fr': "Poison Neural"
		},

		damage: 50,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned and Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné et Paralysé."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card