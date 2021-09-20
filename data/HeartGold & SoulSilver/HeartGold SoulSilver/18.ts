import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Absorption",
				fr: "Absorption d’énergie",
			},
			effect: {
				en: "Search your discard pile for up to 2 Energy cards and attach them to Exeggutor.",
				fr: "Cherchez dans votre pile de défausse jusqu’à deux cartes Énergie et attachez-les à Noadkoko.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Big Eggsplosion",
				fr: "Grosse éclate",
			},
			effect: {
				en: "Flip a coin for each Energy attached to Exeggutor. This attack does 40 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque carte Énergie attachée à Noadkoko. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "If a head drops off, it emits a telepathic call in search of others to form an Exeggcute cluster."
	}
}

export default card
