import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Gardevoir ex δ",
		fr: "Gardevoir ex δ"
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
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Imprison",
				fr: "Possessif"
			},
			effect: {
				en: "Once during your turn (before your attack), if Gardevoir ex is your Active Pokémon, you may put an Imprison marker on 1 of your opponent's Pokémon. Any Pokémon that has any Imprison markers on it can't use any Poké-Powers or Poké-Bodies. This power can't be used if Gardevoir ex is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Gardevoir ex est votre Pokémon Actif, vous pouvez placer 1 marqueur Possessif sur 1 des Pokémon de votre adversaire. Tout Pokémon possédant des marqueurs Possessif ne peut pas utiliser de Poké-Powers ou de Poké-Bodies. Ce pouvoir ne peut pas être utilisé si Gardevoir ex est affecté par un État Spécial."
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
				fr: "Boule de feu"
			},
			effect: {
				en: "You may move a Fire Energy card attached to Gardevoir ex to 1 of your Benched Pokémon.",
				fr: "Vous pouvez déplacer une carte Énergie  attachée à Gardevoir ex sur 1 des Pokémon de votre Banc."
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





}

export default card
