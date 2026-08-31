import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee",
		fr: "Évoli"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [133],
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "Its genetic code is irregular. It may mutate if it is\nexposed to radiation from element stones."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Boosted Evolution",
			fr: "Évolution Boostée"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, it can evolve during your first turn or the turn you play it.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, il peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez."
		}
	}],

	attacks: [{
		name: {
			en: "Stampede",
			fr: "Ruée"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card