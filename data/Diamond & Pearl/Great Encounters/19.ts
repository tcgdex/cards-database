import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Hypno",
		fr: "Hypnomade",
		de: "Hypno"
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
		en: "Drowzee",
		fr: "Soporifik",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dream Catcher",
				fr: "Attrap'rêve",
				de: "Traumfänger"
			},
			effect: {
				en: "If the Defending Pokémon is Asleep, move all damage counters from Hypno to the Defending Pokémon.",
				fr: "Si le Pokémon Défenseur est Endormi, déplacez tous les marqueurs de dégât d'Hypnomade sur le Pokémon Défenseur.",
				de: "Wenn das Verteidigende Pokémon schläft, entferne alle Schadensmarken von Hypno und lege sie auf das Verteidigende Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
				de: "Hypnoschuss"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
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
