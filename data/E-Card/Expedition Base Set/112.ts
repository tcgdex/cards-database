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
		cost: ["Water", "Colorless", "Colorless"],
		name: {
			en: "Sleep Powder",
			fr: "Poudre dodo",
			de: "Dornkanone"
		},
		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
			de: "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
		},
		damage: "20x",

	}, {
		name: {
			de: "Schlafpuder"
		},

		damage: 10,

		effect: {
			de: "Das Verteidigende Pokémon schläft jetzt."
		},

		cost: ["Grass"]
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

	thirdParty: {
		cardmarket: 274987,
		tcgplayer: 86179
	}
}

export default card
