import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Espeon",
		fr: "Mentali",
		es: "Espeon",
		it: "Espeon",
		pt: "Espeon",
		de: "Psiana"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		196,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psy Alert",
				fr: "Alerte Psychique",
				de: "Psy-Alarm"
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
				de: "Ziehe so viele Karten, bis du 6 Karten auf der Hand hast."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Shadow Ball",
				fr: "Ball'Ombre",
				de: "Spukball"
			},
			effect: {
				en: "This attack does 40 damage to 1 of your opponent's Pokémon. Also apply Weakness and Resistance for Benched Pokémon.",
				fr: "Cette attaque inflige 40 dégâts à 1 des Pokémon de votre adversaire. Appliquez aussi la Faiblesse et la Résistance aux Pokémon de Banc.",
				de: "Dieser Angriff fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu. Wende Schwäche und Resistenz auch bei Pokémon auf der Bank an."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Its fur is so sensitive, it can feel minute shifts in the air and predict the weather…and its foes' thoughts.",
		de: "Die Haare seines Fells sind so feinfühlig, dass es am Wind ablesen kann, was seine Gegner denken und wie das Wetter wird."
	},

	thirdParty: {
		cardmarket: 280926,
		tcgplayer: 85328
	}
}

export default card
