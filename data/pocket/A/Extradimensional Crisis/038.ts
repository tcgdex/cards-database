import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Persian",
		'fr-fr': "Persian d'Alola"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [53],
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Alolan Meowth"
	},

	description: {
		'en-us': "The round face of Alolan Persian is considered\nto be a symbol of prosperity in the Alola region,\nso these Pokémon are very well cared for.",
		'fr-fr': "À Alola, sa tête ronde est considérée comme un symbole de prospérité, aussi ce Pokémon est-il traité avec le plus grand respect."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fake Out",
			'fr-fr': "Bluff"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card