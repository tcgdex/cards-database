import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
		es: "Cofagrigus",
		it: "Cofagrigus",
		pt: "Cofagrigus",
		de: "Echnatoll"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		563,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
		de: "Makabaja"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Damagriiigus",
				fr: "Tutankarnage",
				de: "Schadtoll"
			},
			effect: {
				en: "Move all damage counters from 1 of your Benched Pokémon to the Defending Pokémon.",
				fr: "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de Banc vers le Pokémon Défenseur.",
				de: "Verschiebe alle Schadensmarken von 1 Pokémon auf deiner Bank auf das Verteidigende Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Perplex",
				fr: "Affolement",
				de: "Perplex"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It has been said that they swallow those who get too close and turn them into mummies. They like to eat gold nuggets.",
		de: "Angeblich verschlingt es jeden, der sich ihm auch nur nähert. Besonders gern frisst es Klumpen aus reinem Gold."
	},

	thirdParty: {
		cardmarket: 280169,
		tcgplayer: 84384
	}
}

export default card
