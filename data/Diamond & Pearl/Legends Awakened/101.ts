import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Hitmontop",
		fr: "Kapoera",
		de: "Kapoera"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		237,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Triple Kick",
				fr: "Triple pied",
				de: "Dreifachkick"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gut Spin",
				fr: "Tour de tripes",
				de: "Magendreher"
			},
			effect: {
				en: "If Tyrogue is anywhere under Hitmontop, you may switch Hitmontop with 1 of your Benched Pokémon.",
				fr: "Si Debugant se trouve sous Kapoera, vous pouvez échanger Kapoera avec 1 des Pokémon de votre Banc.",
				de: "Wenn Rabauz sich an beliebiger Stelle unter Kapoera befindet, kannst du Kapoera gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il combat en tournoyant comme une toupie. La force centrifuge décuple sa puissance destructrice."
	},

	thirdParty: {
		cardmarket: 278250,
		tcgplayer: 86116
	}
}

export default card
