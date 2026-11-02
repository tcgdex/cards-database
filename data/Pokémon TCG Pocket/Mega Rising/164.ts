import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Morgrem",
		fr: "Fourbelin"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [860],
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Impidimp",
		fr: "Grimalin"
	},

	description: {
		en: "This Pokémon absorbs negative emotions and\nturns them into energy. It's popular with people\nwho tend to think gloomy thoughts."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "False Surrender",
			fr: "Fourbette"
		},

		damage: 50,
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card