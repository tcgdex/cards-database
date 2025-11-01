import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Espeon ex",
		fr: "Mentali-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Psychic Healing",
			fr: "Soin Psy"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may heal 30 damage from 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez soigner 30 dégâts d'un de vos Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy"
		},

		damage: 80,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card