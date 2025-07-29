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
			},
			effect: {
				en: "Move all damage counters from 1 of your Benched Pokémon to the Defending Pokémon.",
				fr: "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de Banc vers le Pokémon Défenseur.",
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
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
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

	thirdParty: {
		cardmarket: 280169
	}
}

export default card
