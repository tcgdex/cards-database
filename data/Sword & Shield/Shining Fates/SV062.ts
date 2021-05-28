import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Lanssorien",
		en: "Dragapult"
	},

	illustrator: "Naoki Saito",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Dispareptil",
		en: "Drakloak"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Infiltration",
			en: "Infiltrator"
		},

		effect: {
			fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c’est face, évitez ces dégâts.",
			en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage."
		}
	}],

	attacks: [{
		name: {
			fr: "Hantise",
			en: "Phantom Force"
		},

		effect: {
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			en: "Put 3 damage counters on your opponent’s Benched Pokémon in any way you like."
		},

		damage: 120,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	regulationMark: "D"
}

export default card