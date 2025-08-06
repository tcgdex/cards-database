import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Rampardos",
		fr: "Charkos",
		de: "Rameidon"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		409,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Cranidos",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Assurance",
				fr: "Assurance",
				de: "Gewissheit"
			},
			effect: {
				en: "As long as the Defending Pokémon's remaining HP is 60 or less, this attack's base damage is 60 instead of 30.",
				fr: "Tant qu'il reste un maximum de 60 PV au Pokémon Défenseur, les dégâts de base de cette attaque sont de 60 au lieu de 30.",
				de: "Solange die verbliebenen KP des Verteidigenden Pokémon 60 oder weniger betragen, beträgt der Grundschaden dieses Angriffs 60 Schadenspunkte anstelle von 30 Schadenspunkten."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Hasty Headbutt",
				fr: "Coup d'boule rapide",
				de: "Hastige Kopfnuss"
			},
			effect: {
				en: "Rampardos does 20 damage to itself. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Charkos s'inflige 20 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Power, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				de: "Rameidon fügt sich selbst 20 Schadenspunkte zu. Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	description: {
		fr: "Son violent coup de tête est assez puissant pour pulvériser les matériaux les plus résistants"
	},

	thirdParty: {
		cardmarket: 277662,
		tcgplayer: 88569
	}
}

export default card
