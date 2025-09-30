import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
		de: "Machomei"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Take Out",
				fr: "Éliminer",
				de: "Ausnocken"
			},
			effect: {
				en: "If the Defending Pokémon isn't an Evolved Pokémon, that Pokémon is Knocked Out instead of damaged by this attack.",
				fr: "Si le Pokémon Défenseur n'est pas un Pokémon Évolué, ce Pokémon est mis K.O par cette attaque.",
				de: "Wenn das Verteidigende Pokémon kein entwickeltes Pokémon ist, ist es jetzt kampfunfähig, anstatt Schaden von diesem Angriff zu erhalten."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane Punch",
				fr: "Poing ouragan",
				de: "Hurrikanhieb"
			},
			effect: {
				en: "Flip 4 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Raserei"
			},
			effect: {
				en: "Does 60 damage plus 10 more damage for each damage counter on Machamp.",
				fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Mackogneur.",
				de: "Dieser Angriff fügt 60 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Machomei zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278318,
		tcgplayer: 86966
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"]
		},
	]
}

export default card
