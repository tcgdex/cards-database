import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
		de: "Nachtara"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
		de: "Evoli"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Moonlight Veil",
				fr: "Voile lunaire",
				de: "Mondschleier"
			},
			effect: {
				en: "Each of your Pokémon that evolves from Eevee has no Weakness, and that Pokémon's Retreat Cost is 0.",
				fr: "Chacun de vos Pokémon évoluant d'Evoli ne possède pas de Faiblesse et a un Coût de retraite de 0.",
				de: "Jedes deiner Pokémon, das sich aus Evoli entwickelt, hat keine Schwäche mehr und hat Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Konfustrahl"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "The light of the moon changed Eevee's genetic structure. It lurks in darkness for prey.",
		de: "Mondlicht hat die genetische Struktur von EVOLI verändert. Im Dunkeln wartet es auf Beute."
	},

	thirdParty: {
		cardmarket: 278081,
		tcgplayer: 90144
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
