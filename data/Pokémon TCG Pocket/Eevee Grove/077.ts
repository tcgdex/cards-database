import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Umbreon",
		fr: "Noctali"
	},

	illustrator: "kawayoo",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [197],
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "When exposed to the moon's aura, the rings on its\nbody glow faintly and it gains a mysterious power.",
		fr: "Quand il s'expose aux ondes lunaires, ses anneaux brillent légèrement et il acquiert un mystérieux pouvoir."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Dark Binding",
			fr: "Entrave Sombre"
		},

		damage: 40,
		cost: ["Darkness"],

		effect: {
			en: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
			fr: "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card