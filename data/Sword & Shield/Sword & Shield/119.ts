import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Galarian Obstagoon",
		fr: "Ixon de Galar",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 160,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Galarian Linoone",
		fr: "Linéon de Galar",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Untamed Shout",
				fr: "Cri Sauvage",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 3 damage counters on 1 of your opponent’s Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 3 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Obstruct",
				fr: "Blocage",
			},
			effect: {
				en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
