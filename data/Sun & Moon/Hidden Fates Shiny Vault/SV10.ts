import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Quagsire",
		fr: "Maraiste",
		de: "Morlord"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		195,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
		de: "Felino"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wash Out",
				fr: "Surlavage",
				de: "Wegspülen"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Water Energy from 1 of your Benched Pokémon to your Active Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Water de l’un de vos Pokémon de Banc vers votre Pokémon Actif.",
				de: "Beliebig oft während deines Zuges (bevor du angreifst) kannst du 1 {W}-Energie von 1 Pokémon auf deiner Bank auf dein Aktives Pokémon verschieben."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
				de: "Hydropumpe"
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten {W}-Energien zu."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		en: "This carefree Pokémon has an easygoing nature. While swimming, it always bumps into boat hulls.",
		de: "Dieses genügsame Pokémon ist sehr umgänglich. Beim Schwimmen stößt es immer wieder gegen Schiffe."
	},
}

export default card
