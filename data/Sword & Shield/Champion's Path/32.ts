import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Grapploct V",
		fr: "Krakos V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 210,

	types: [
		"Fighting",
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	attacks: [{
		name: {
			en: "Tie Up",
			fr: "Ligoter"
		},

		effect: {
			en: "If the Defending Pokémon is a Basic Pokémon, it can’t attack during your opponent’s next turn.",
			fr: "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire."
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Moonsault Press",
			fr: "Moonsault Press"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 100 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 100 dégâts supplémentaires."
		},

		damage: "120+",
		cost: ["Fighting", "Fighting", "Colorless"]
	}]
}

export default card
