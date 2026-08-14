import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Reshiram",
		fr: "Reshiram",
		es: "Reshiram",
		it: "Reshiram",
		pt: "Reshiram",
		de: "Reshiram"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		643,
	],

	hp: 130,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Outrage",
				fr: "Colère",
				de: "Wutanfall"
			},
			effect: {
				en: "Does 10 more damage for each damage counter on this Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Blue Flare",
				fr: "Flamme Bleue",
				de: "Blauflammen"
			},
			effect: {
				en: "Discard 2 Fire Energy attached to this Pokémon.",
				fr: "Défaussez 2 Énergies Fire attachées à ce Pokémon.",
				de: "Lege 2 an dieses Pokémon angelegte {R}-Energien auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "This Pokémon appears in legends. It sends flames into the air from its tail, burning up everything around it.",
		de: "Ein aus Mythen bekanntes Pokémon. Es wirbelt mit seinem Schweif Feuer auf, mit dem es alles in Asche legt."
	},

	thirdParty: {
		cardmarket: 279764,
		tcgplayer: 88704
	}
}

export default card
