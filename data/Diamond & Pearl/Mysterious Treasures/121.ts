import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Electivire",
		fr: "Elekable"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		466,
	],
	hp: 120,
	types: [
		"Lightning",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Shocking Tail",
				fr: "Choc-queue"
			},
			effect: {
				en: "As long as Electivire is your Active Pokémon, whenever your opponent attaches an Energy card from his or her hand to 1 of his or her Pokémon, put 2 damage counters on that Pokémon.",
				fr: "Tant qu'Elekable est votre Pokémon Actif, lorsque votre adversaire attache une cartes Énergie de sa main à 1 de ses Pokémon, placez 2 marqueurs de dégât sur ce Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Pulse Barrier",
				fr: "Barrière vibrante"
			},
			effect: {
				en: "Discard all of your opponent's Pokémon Tool cards and Stadium cards in play. If you do, prevent all effects, including damage, done to Electivire during your opponent's next turn.",
				fr: "Défaussez toutes les cartes Outil Pokémon et les cartes Stade que votre adversaire a en jeu. Prévenez alors tous les effets, dégâts inclus, infligés à Elekable lors du prochain tour de votre adversaire."
			},
			damage: 50,

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
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
