import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Banette",
		fr: "Branette"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr"
	},

	attacks: [{
		name: {
			en: "Resolute Spite",
			fr: "Mépris Inflexible"
		},

		effect: {
			en: "Put up to 7 damage counters on this Pokémon. This attack does 20 damage for each damage counter you placed in this way.",
			fr: "Placez jusqu’à 7 marqueurs de dégâts sur ce Pokémon. Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé de cette façon."
		},

		damage: "20×",
		cost: ["Psychic"]
	}, {
		name: {
			en: "Eerie Light",
			fr: "Lumière Étrange"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card