import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Sirfetch’d V",
		fr: "Palarticho de Galar V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Common",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Resolute Spear",
			fr: "Lance Inébranlable"
		},

		effect: {
			en: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may move any amount of Fighting Energy from your other Pokémon to it.",
			fr: "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez déplacer autant d’Énergies Fighting que vous le voulez de vos autres Pokémon vers celui-ci."
		}
	}],

	attacks: [{
		name: {
			en: "Meteor Smash",
			fr: "Impact Astral"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
		},

		damage: 200,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card