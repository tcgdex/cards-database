import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Politoed",
		fr: "Tarpaud"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [186],
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Poliwhirl"
	},

	description: {
		en: "At nightfall, these Pokémon appear on the shores\nof lakes. They announce their territorial claims by\nletting out cries that sound like shouting.",
		fr: "Il apparaît sur les rives des étangs à la nuit tombée. Il marque son territoire en poussant des hurlements."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Lordly Cheering",
			fr: "Encouragements Dignes"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, attacks used by your Pokémon that evolve from Poliwhirl do +40 damage to your opponent's Active Pokémon.",
			fr: "Tant que ce Pokémon est sur votre Banc, les attaques de vos Pokémon évoluant de Têtarte infligent + 40 dégâts au Pokémon Actif de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			en: "Hyper Voice",
			fr: "Mégaphone"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card