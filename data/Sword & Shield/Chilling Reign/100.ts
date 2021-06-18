import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Slowking VMAX",
		fr: "Roigada de Galar VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Darkness"],

	evolveFrom: {
		en: "Galarian Slowking V",
		fr: "Roigada de Galar-V"
	},

	attacks: [{
		name: {
			en: "Max Toxify",
			fr: "Toxomax"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Poisoned. During Pokémon Checkup, put 12 damage counters on that Pokémon instead of 1.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 12 marqueurs de dégâts sur ce Pokémon-là au lieu d’un."
		},

		damage: 10,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card