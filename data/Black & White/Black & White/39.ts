import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Alomomola",
		fr: "Mamanbo",
		es: "Alomomola",
		it: "Alomomola",
		pt: "Alomomola",
		de: "Mamolida"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		594,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
				de: "Aquawelle"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
				de: "Hydropumpe"
			},
			effect: {
				en: "Does 10 more damage for each Water Energy attached to this Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede an dieses Pokémon angelegte {W}-Energie zu."
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

	retreat: 3,

	description: {
		en: "Floating in the open sea is how they live. When they find a wounded Pokémon, they embrace it and bring it to shore.",
		de: "Es treibt durch den Ozean. Findet es ein verletztes Pokémon, nimmt es dieses auf und trägt es zurück an Land."
	},

	thirdParty: {
		cardmarket: 279776,
		tcgplayer: 83506
	}
}

export default card
