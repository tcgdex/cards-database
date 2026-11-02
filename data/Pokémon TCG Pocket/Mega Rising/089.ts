import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Pachirisu",
		fr: "Pachirisu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [417],
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "A pair may be seen rubbing their cheek pouches\ntogether in an effort to share stored electricity."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Attack the Wound",
			fr: "Défi de la Plaie"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon has damage on it, this attack does 30 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a subi des dégâts, cette attaque inflige 30 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card