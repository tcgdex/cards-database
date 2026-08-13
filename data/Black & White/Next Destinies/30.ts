import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Basculin",
		fr: "Bargantua",
		es: "Basculin",
		it: "Basculin",
		pt: "Basculin",
		de: "Barschuft"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		550,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bared Fangs",
				fr: "Crocs à Vif",
				de: "Gebleckte Fänge"
			},
			effect: {
				en: "If, before this Pokémon does damage, the Defending Pokémon has no damage counters on it, this attack does nothing.",
				fr: "Si, avant que ce Pokémon inflige des dégâts, le Pokémon Défenseur n'a aucun marqueur de dégâts, cette attaque ne fait rien.",
				de: "Falls, bevor dieses Pokémon Schaden zufügt, auf dem Verteidigenden Pokémon keine Schadensmarken liegen, hat dieser Angriff keine Auswirkungen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Red and blue Basculin usually do not get along, but sometimes members of one school mingle with the other's school.",
		de: "Rot gestreifte und blau gestreifte Exemplare sind sich feindlich gesonnen. Doch ist jeder Schwarm bunt gemischt."
	},

	thirdParty: {
		cardmarket: 280255,
		tcgplayer: 83733
	}
}

export default card
