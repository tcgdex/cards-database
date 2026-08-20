import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Jolteon ex",
		fr: "Voltali-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [135],
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Electromagnetic Wall",
			fr: "Mur Électromagnétique"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, whenever your opponent attaches an Energy from their Energy Zone to 1 of their Pokémon, do 20 damage to that Pokémon.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, chaque fois que votre adversaire attache une Énergie de sa zone Énergie à un de ses Pokémon, infligez 20 dégâts au Pokémon de l'adversaire."
		}
	}],

	attacks: [{
		name: {
			en: "Mach Bolt",
			fr: "Éclair Fulgurant"
		},

		damage: 80,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-gyarados"]
}

export default card