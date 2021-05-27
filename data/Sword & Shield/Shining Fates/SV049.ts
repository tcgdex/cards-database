import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Corayon de Galar",
		en: "Galarian Corsola"
	},

	illustrator: "Mizue",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Chute Maudite",
			en: "Cursed Drop"
		},

		effect: {
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			en: "Put 3 damage counters on your opponent’s Pokémon in any way you like."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card