import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnézone",
		de: "Magnezone"
	},
	illustrator: "Nakaoka",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		462,
	],
	hp: 120,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Magneton",
		fr: "Magneton",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Magnetize",
				fr: "Magnétiser",
				de: "Magnetisieren"
			},
			effect: {
				en: "If you have any Metal Energy attached to your Active Pokémon, the Retreat Cost for that Pokémon is 0.",
				fr: "Si votre Pokémon Actif possède des Énergies Metal, son Coût de retraite est de 0.",
				de: "Wenn an dein Aktives Pokémon mindestens 1  Energie angelegt ist, hat dieses Pokémon Rückzugskosten 0."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Blast",
				fr: "Explosion métallique",
				de: "Metallexplosion"
			},
			effect: {
				en: "Does 50 damage plus 10 more damage for each Metal Energy attached to Magnezone.",
				fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Metal attachée à Magnézone.",
				de: "Dieser Angrif fügt 50 Schadenspunkte plus 10 weitere Schadenspunkte für jede  Energie, die an Magnezone angelegt ist, zu."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
