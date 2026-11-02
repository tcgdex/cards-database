import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Altaria",
		fr: "Altaria",
		de: "Altaria"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [334],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
		de: "Wablu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dragon Dance",
				fr: "Danse de dragon",
				de: "Drachentanz"
			},
			effect: {
				en: "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, this attack does 40 more damage (before applying Weakness and Resistance).",
				fr: "Lors de votre prochain tour, si un de vos Pokémon Actifs inflige des dégâts à un des Pokémon Défenseurs, cette attaque inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				de: "Falls eines deiner jetzigen Aktiven Pokémon im nächsten Zug einem Verteidigenden Pokémon Schaden zufügt, fügt der Angriff 40 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet wurden)."
			},

		},
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				en: "Dragon Song",
				fr: "Chanson de dragon",
				de: "Drachenlied"
			},
			effect: {
				en: "Each Defending Pokémon is now Asleep.",
				fr: "Chaque Pokémon Défenseur est maintenant Endormi.",
				de: "Alle Verteidigenden Pokémon schlafen jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83513,
				cardmarket: 275879
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83513,
				cardmarket: 275879
			},
		},
	],

}

export default card
