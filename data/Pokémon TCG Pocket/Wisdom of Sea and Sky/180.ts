import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Scizor",
		fr: "Cizayox"
	},

	illustrator: "danciao",
	rarity: "One Star",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		en: "Scyther"
	},

	description: {
		en: "This Pokémon's pincers, which contain steel, can\ncrush any hard object they get ahold of into bits.",
		fr: "Les pinces de ce Pokémon contiennent de l'acier et peuvent réduire quasiment n'importe quoi en miettes."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gale Thrust",
			fr: "Coup d'Bourrasque"
		},

		damage: 50,
		cost: ["Metal", "Metal"],

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 50 more damage.",
			fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 50 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card