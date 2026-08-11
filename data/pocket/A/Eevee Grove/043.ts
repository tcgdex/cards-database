import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Umbreon",
		'fr-fr': "Noctali"
	},

	illustrator: "Ryota Murayama",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [197],
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Eevee"
	},

	description: {
		'en-us': "When exposed to the moon's aura, the rings on its\nbody glow faintly and it gains a mysterious power.",
		'fr-fr': "Quand il s'expose aux ondes lunaires, ses anneaux brillent légèrement et il acquiert un mystérieux pouvoir."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Dark Binding",
			'fr-fr': "Entrave Sombre"
		},

		damage: 40,
		cost: ["Darkness"],

		effect: {
			'en-us': "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
			'fr-fr': "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card