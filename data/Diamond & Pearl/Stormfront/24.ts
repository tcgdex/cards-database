import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Salamence",
		fr: "Salamence",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],
	hp: 140,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Battle Rush",
				fr: "Bataille précipitée",
			},
			effect: {
				en: "If your opponent has any Pokémon in play that has maximum HP of 120 or more, ignore all Colorless Energy necessary to use Salamence's attacks.",
				fr: "Si votre adversaire possède des Pokémon en jeu avec un maximum de 120 PV ou plus, ignorez toutes les Énergies Colorless nécessaires pour utiliser les attaques de Drattak.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steam Twister",
				fr: "Tornade vapeur",
			},
			effect: {
				en: "Discard a Fire Energy and a Water Energy attached to Salamence.",
				fr: "Défaussez une Énergie Fire et une Énergie Water attachée à Drattak.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
