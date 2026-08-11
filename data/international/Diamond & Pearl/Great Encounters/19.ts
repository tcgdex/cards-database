import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Hypno",
		'fr-fr': "Hypnomade",
		'de-de': "Hypno"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		97,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dream Catcher",
				'fr-fr': "Attrap'rêve",
				'de-de': "Traumfänger"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Asleep, move all damage counters from Hypno to the Defending Pokémon.",
				'fr-fr': "Si le Pokémon Défenseur est Endormi, déplacez tous les marqueurs de dégât d'Hypnomade sur le Pokémon Défenseur.",
				'de-de': "Wenn das Verteidigende Pokémon schläft, entferne alle Schadensmarken von Hypno und lege sie auf das Verteidigende Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Hypnoblast",
				'fr-fr': "Hypnoblast",
				'de-de': "Hypnoschuss"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Seeing its swinging pendulum can induce sleep in three seconds, even if someone just woke up.",
	},

	thirdParty: {
		cardmarket: 277921,
		tcgplayer: 86254
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
