import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Alcremie",
		fr: "Charmilly"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Milcery"
	},

	description: {
		en: "When it trusts a Trainer, it will treat them\nto berries it's decorated with cream.",
		fr: "Il offre aux Dresseurs auxquels il accorde toute sa confiance des Baies décorées avec de la crème."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sweets Overload",
			fr: "Avalanche Sucrée"
		},

		damage: 40,
		cost: ["Colorless"],

		effect: {
			en: "This attack does 40 damage for each time your Pokémon used Sweets Relay during this game.",
			fr: "Cette attaque inflige 40 dégâts pour chaque utilisation de  par vos Pokémon pendant cette partie."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card