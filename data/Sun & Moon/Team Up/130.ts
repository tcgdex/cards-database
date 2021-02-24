import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Aerodactyl",
		fr: "Ptéra",
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		142,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Supersonic",
				fr: "Ultrason",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fossil Fangs",
				fr: "Crocs Fossiles",
			},
			effect: {
				en: "If you don't have any Pokémon-GX or Pokémon-{EX} on your Bench, this attack does 90 more damage.",
				fr: "Si vous n’avez pas de Pokémon-GX ou de Pokémon-{EX} sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
