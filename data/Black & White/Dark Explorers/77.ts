import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Klinklang",
		fr: "Cliticlic",
		es: "Klinklang",
		it: "Klinklang",
		pt: "Klinklang",
		de: "Klikdiklak"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		601,
	],

	hp: 140,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Klang",
		fr: "Clic",
		de: "Kliklak"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Metal Blast",
				fr: "Explosion Métallique",
				de: "Metallexplosion"
			},
			effect: {
				en: "Does 20 more damage for each Metal Energy attached to this Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie  attachée à ce Pokémon.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte {M}-Energie zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lock Gear",
				fr: "Déclic Mécanique",
				de: "Volle Drehung"
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
				de: "Ziehe so viele Karten, bis du 6 Karten auf der Hand hast."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		en: "The gear with the red core is rotated at high speed for a rapid energy charge.",
		de: "Indem es das Rad mit dem roten Zentrum mit hohem Tempo zum Rotieren bringt, kann es eine Turboladung durchführen."
	},

	thirdParty: {
		cardmarket: 280405,
		tcgplayer: 86487
	}
}

export default card
