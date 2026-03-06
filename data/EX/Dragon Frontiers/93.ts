import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Gardevoir ex δ",
		fr: "Gardevoir ex δ",
		de: "Guardevoir ex"
	},

	illustrator: "Masahiko Ishii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 150,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Imprison",
				fr: "Possessif",
				de: "Begrenzer"
			},
			effect: {
				en: "Once during your turn (before your attack), if Gardevoir ex is your Active Pokémon, you may put an Imprison marker on 1 of your opponent's Pokémon. Any Pokémon that has any Imprison markers on it can't use any Poké-Powers or Poké-Bodies. This power can't be used if Gardevoir ex is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Gardevoir ex est votre Pokémon Actif, vous pouvez placer 1 marqueur Possessif sur 1 des Pokémon de votre adversaire. Tout Pokémon possédant des marqueurs Possessif ne peut pas utiliser de Poké-Powers ou de Poké-Bodies. Ce pouvoir ne peut pas être utilisé si Gardevoir ex est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) wenn Guardevoir ex dein Aktives Pokémon ist, kannst du 1 Begrenzer-Marke auf 1 Pokémon deines Gegners legen. Pokémon auf denen Begrenzer-Marken liegen, können keine Poké-Power oder Poké-Body einsetzen. Diese Poké-Power kann nicht benutzt werden, wenn Guardevoir ex von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flame Ball",
				fr: "Boule de feu",
				de: "Flammender Ball"
			},
			effect: {
				en: "You may move a Fire Energy card attached to Gardevoir ex to 1 of your Benched Pokémon.",
				fr: "Vous pouvez déplacer une carte Énergie  attachée à Gardevoir ex sur 1 des Pokémon de votre Banc.",
				de: "Du kannst eine an Guardevoir ex angelegte -Energiekarte an 1 Pokémon auf deiner Bank legen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277298
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
