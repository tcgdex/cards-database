import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Tranquill",
		fr: "Colombeau",
		es: "Tranquill",
		it: "Tranquill",
		pt: "Tranquill",
		de: "Navitaub"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		520,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Pidove",
		fr: "Poichigeon",
		de: "Dusselgurr"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Slash",
				fr: "Lame d'Air",
				de: "Luftschnitt"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "No matter where in the world it goes, it knows where its nest is, so it never gets separated from its Trainer.",
		de: "Findet selbst von der anderen Seite des Globus zu seinem Nest zurück. Nichts kann es von seinem Trainer trennen."
	},

	thirdParty: {
		cardmarket: 280711,
		tcgplayer: 90016
	}
}

export default card
