import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Wailord",
		fr: "Wailord",
		de: "Wailord"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		321,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Reactive Lift",
				fr: "Ascension réactive",
				de: "Reaktiver Transporter"
			},
			effect: {
				en: "As long as Wailord has any React Energy cards attached to it, the Retreat Cost for each of your Water Pokémon (excluding Pokémon-ex) is 0.",
				fr: "Tant que Wailord possède des cartes Énergie réaction, le Coût de retraite de chacun de vos Pokémon  (Pokémon-ex exclus) est de 0.",
				de: "Solange an Wailord mindestens eine Reaktions-Energiekarte angelegt ist, sind die Rückzugskosten deiner -Pokémon (außer Pokémon-ex) 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hypno Splash",
				fr: "Hypnoplouf",
				de: "Hypnospritzer"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Water",
				"Water",
			],
			name: {
				en: "Rely on Friends",
				fr: "Compter sur les amis",
				de: "Auf Freunde verlassen"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each of your Benched Stage 1 Evolved Pokémon.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chacun de vos Pokémon Évolués de niveau 1 sur votre Banc.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jedes entwickelte Pokémon der Phase 1 auf deiner Bank zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 4,

	thirdParty: {
		cardmarket: 276891,
		tcgplayer: 90458
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
