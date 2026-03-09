import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Wormadam Trash Cloak",
		fr: "Cheniselle Cape Déchet",
		de: "Burmadame Lumpenumhang"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		413,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Burmy Trash Cloak",
		fr: "Cheniti Cape Déchet",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Trash Cloak",
				fr: "Cape déchet",
				de: "Lumpenumhang"
			},
			effect: {
				en: "If Wormadam Trash Cloak has a Pokémon Tool card attached to it, any damage done to Wormadam Trash Cloak by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Si Cheniselle Cape Déchet  possède une carte Outil Pokémon, tous dégâts qui lui sont infligés par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Wenn an Burmadame Lumpenumhang eine Pokémon-Ausrüstungs angelegt ist, wird Schaden, der Burmadame Lumpenumhang durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Iron Tackle",
				fr: "Charge de fer",
				de: "Eisentackle"
			},
			effect: {
				en: "Wormadam Trash Cloak does 20 damage to itself.",
				fr: "Cheniselle Cape Déchet s'inflige 20 dégâts.",
				de: "Burmadame Lumpenumhang fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
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

	thirdParty: {
		cardmarket: 277796,
		tcgplayer: 90645
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
