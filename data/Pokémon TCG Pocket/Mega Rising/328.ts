import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Arceus ex",
		fr: "Arceus-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [493],
	hp: 140,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fabled Luster",
			fr: "Éclat de Légende"
		},

		effect: {
			en: "This Pokémon can't be affected by any Special Conditions.",
			fr: "Ce Pokémon ne peut être affecté par aucun État Spécial."
		}
	}],

	attacks: [{
		name: {
			en: "Ultimate Force",
			fr: "Pouvoir Ultime"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 20 more damage for each of your Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card