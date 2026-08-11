import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Drampa",
		'fr-fr': "Draïeul"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [780],
	hp: 100,
	types: ["Dragon"],

	description: {
		'en-us': "The mountains it calls home are nearly two miles\nin height. On rare occasions, it descends to play\nwith the children living in the towns below.",
		'fr-fr': "Il vit dans les montagnes culminant à plus de 3 000 m d'altitude. Il se rend parfois en ville pour jouer avec les petits enfants."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Dragon Breath",
			'fr-fr': "Draco-Souffle"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		}
	}],

	retreat: 2
}

export default card