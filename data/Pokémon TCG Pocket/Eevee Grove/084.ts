import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax ex",
		fr: "Ronflex-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [143],
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Full-Mouth Manner",
			fr: "Bouche Pleine"
		},

		effect: {
			en: "At the end of your turn, if this Pokémon is in the Active Spot, heal 20 damage from it.",
			fr: "À la fin de votre tour, si ce Pokémon est sur le Poste Actif, soignez 20 dégâts à ce Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Flop-Down Punch",
			fr: "Poing Torpide"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This Pokémon is now Asleep.",
			fr: "Ce Pokémon est maintenant Endormi."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4
}

export default card