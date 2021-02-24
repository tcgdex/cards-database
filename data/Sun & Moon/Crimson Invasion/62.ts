import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		635,
	],
	hp: 160,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Weed Out",
				fr: "Filtrage",
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose 3 of your Benched Pokémon. Then, discard your other Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez choisir 3 de vos Pokémon de Banc. Ensuite, défaussez vos autres Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Destruction",
				fr: "Destruction Sombre",
			},
			effect: {
				en: "You may discard an Energy from this Pokémon. If you do, discard an Energy from your opponent's Active Pokémon.",
				fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
