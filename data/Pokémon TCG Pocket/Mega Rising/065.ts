import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Seismitoad",
		fr: "Crapustule"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [537],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Palpitoad",
		fr: "Batracné"
	},

	description: {
		en: "This Pokémon is popular among the elderly,\nwho say the vibrations of its lumps are great\nfor massages."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Split Spiral Punch",
			fr: "Coup d'Poing en Demi Spirale"
		},

		damage: 90,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card