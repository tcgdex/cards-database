import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Alakazam V",
		fr: "Alakazam V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Zen Spoon",
			fr: "Cuillère Zen"
		},

		effect: {
			en: "Put 3 damage counters on your opponent’s Pokémon in any way you like.",
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît."
		},

		cost: ["Psychic"]
	}, {
		name: {
			en: "Mind Ruler",
			fr: "Contrôle Mental"
		},

		effect: {
			en: "This attack does 30 damage for each card in your opponent’s hand.",
			fr: "Cette attaque inflige 30 dégâts pour chaque carte dans la main de votre adversaire."
		},

		damage: "30×",
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

	retreat: 1
}

export default card