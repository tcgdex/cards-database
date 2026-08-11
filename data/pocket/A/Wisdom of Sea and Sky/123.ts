import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Scizor",
		'fr-fr': "Cizayox"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [212],
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Scyther"
	},

	description: {
		'en-us': "This Pokémon's pincers, which contain steel, can\ncrush any hard object they get ahold of into bits.",
		'fr-fr': "Les pinces de ce Pokémon contiennent de l'acier et peuvent réduire quasiment n'importe quoi en miettes."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Gale Thrust",
			'fr-fr': "Coup d'Bourrasque"
		},

		damage: 50,
		cost: ["Metal", "Metal"],

		effect: {
			'en-us': "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 50 more damage.",
			'fr-fr': "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 50 dégâts supplémentaires."
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