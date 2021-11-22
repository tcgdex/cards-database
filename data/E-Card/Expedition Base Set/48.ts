import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma"
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Haunter",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Chaos Move",
				fr: "Mouvement chaotique"
			},
			effect: {
				en: "Once during your turn (before you attack), if your opponent has 3 or fewer Prizes, you may move 1 damage counter from 1 Pokémon (yours or your opponent's) to another (even if it would Knock Out the other Pokémon). This power can't be used if Gengar is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si votre adversaire a un maximum de 3 Récompenses, vous pouvez déplacer 1 marqueur de dégâts depuis un Pokémon (le vôtre ou celui de l'adversaire) vers un autre (même si cela met l'autre Pokémon K.O.). Ce pouvoir ne peut pas être utilisé si Ectoplasma est affecté par un État spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Hide in Shadows",
				fr: "Cache-ombre"
			},
			effect: {
				en: "Switch Gengar with one of your Benched Pokémon.",
				fr: "Échangez Ectoplasma contre l'un des Pokémon de votre Banc, si vous en avez."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
