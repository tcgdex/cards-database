import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul",
		es: "Vanilluxe",
		it: "Vanilluxe",
		pt: "Vanilluxe",
		de: "Gelatwino"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		584,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Vanillish",
		fr: "Sorboul",
		de: "Gelatroppo"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Enefountain",
				fr: "Fontaine d'Énergie",
				de: "Energiebrunnen"
			},
			effect: {
				en: "Attach 2 basic Energy cards from your hand to 1 of your Pokémon.",
				fr: "Attachez 2 cartes Énergie de base de votre main à 1 de vos Pokémon.",
				de: "Lege 2 Basis-Energiekarten von deiner Hand an 1 deiner Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Blizzard",
				fr: "Blizzard",
				de: "Blizzard"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Swallowing large amounts of water, they make snow clouds inside their bodies and, when angry, cause violent blizzards.",
		de: "Es verschluckt Unmengen an Wasser und wandelt es intern in Schneewolken um. Ist es wütend, erzeugt es Schneestürme."
	},

	thirdParty: {
		cardmarket: 280777,
		tcgplayer: 90275
	}
}

export default card
