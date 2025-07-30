import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		de: "Kokowei"
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
				de: "Energieaufnahme"
			},
			effect: {
				en: "Search your discard pile for up to 2 Energy cards and attach them to Exeggutor.",
				fr: "Cherchez dans votre pile de défausse jusqu’à deux cartes Énergie et attachez-les à Noadkoko.",
				de: "Durchsuche deinen Ablagestapel nach bis zu 2 Energiekarten und lege sie an Kokowei an."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Big Eggsplosion",
				fr: "Grosse éclate",
				de: "Große Eggsplosion"
			},
			effect: {
				en: "Flip a coin for each Energy attached to Exeggutor. This attack does 40 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque carte Énergie attachée à Noadkoko. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				de: "Wirf für jede an Kokowei angelegte Energie 1 Münze. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40x",

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
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278990,
		tcgplayer: 85362
	}
}

export default card
