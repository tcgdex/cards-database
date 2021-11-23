import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		197,
	],
	hp: 80,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dark Moon",
				fr: "Sombre lune"
			},
			effect: {
				en: "As long as Umbreon is your Active Pokémon and has a Dark Energy attached to it, once during your turn (before your attack), you may look at your opponent's hand. Choose from it a number of cards up to the number of Dark Energy attached to Umbreon and shuffle them into your opponent's deck. Your opponent then draws the same number of cards from his or her deck. This power can't be used if Umbreon is affected by a Special Condition.",
				fr: "Tant que Noctali est votre Pokémon Actif et tant qu'une Énergie  lui est attachée, une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder la main de votre adversaire. Choisissez-y le nombre de cartes que vous désirez, jusqu'au nombre de cartes Énergie  attachées à Noctali et mélangez-les au deck de votre adversaire. Votre adversaire pioche ensuite ce même nombre de cartes dans son deck. Ce pouvoir ne peut pas être utilisé si Noctali est affecté par un État spécial."
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
				en: "Shadow Bind",
				fr: "Étreinte d'ombre"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
