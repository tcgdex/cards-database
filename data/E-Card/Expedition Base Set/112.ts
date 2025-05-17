import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Hoppip",
		fr: "Granivol",
		de: "Hoppspross"
	},
	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		187,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [{
		cost: ["Grass"],
		name: {
			en: "Sleep Powder",
			fr: "Poudre dodo",
			de: "Schlafpuder"
		},
		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
			de: "Das Verteidigende Pokémon schläft jetzt."
		},
	}],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],




}

export default card
