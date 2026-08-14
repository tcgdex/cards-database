import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Manectric",
		fr: "Élecsprint",
		es: "Manectric",
		it: "Manectric",
		pt: "Manectric",
		de: "Voltenso"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
		de: "Frizelbliz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energy Crush",
				fr: "Écras'Énergie",
				de: "Zermalmende Energie"
			},
			effect: {
				en: "Does 20 damage times the amount of Energy attached to all of your opponent's Pokémon.",
				fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous les Pokémon de votre adversaire.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an allen Pokémon deines Gegners angelegten Energien zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flash Impact",
				fr: "Impact-Flash",
				de: "Blitzeinschlag"
			},
			effect: {
				en: "Does 20 damage to 1 of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 de vos Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 deiner Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "It discharges electricity from its mane. It creates a thundercloud overhead to drop lightning bolts.",
		de: "Aus seiner Mähne entlädt es Elektrizität. Es generiert eine Gewitterwolke, aus der es Blitze entlädt."
	},

	thirdParty: {
		cardmarket: 280482,
		tcgplayer: 87165
	}
}

export default card
