import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Jumpluff",
		fr: "Cotovol"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Skiploom"
	},

	description: {
		en: "Jumpluff travels on seasonal winds. Once its\ncotton spores run out, its journey ends, as does\nits life.",
		fr: "Il voyage au gré des vents saisonniers. Quand il arrive à court de spores de coton, cela marque la fin de son périple, mais aussi de sa vie."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fluffy Flight",
			fr: "Envolée Molletonnée"
		},

		effect: {
			en: "Your Active Pokémon has no Retreat Cost.",
			fr: "Votre Pokémon Actif n'a aucun Coût de Retraite."
		}
	}],

	attacks: [{
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante"
		},

		damage: 60,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card