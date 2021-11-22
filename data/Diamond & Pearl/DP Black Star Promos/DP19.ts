import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Darkrai",
		fr: "Darkrai"
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		491,
	],
	hp: 100,
	types: [
		"Darkness",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Shadow",
				fr: "Ombre obscure"
			},
			effect: {
				en: "Each basic Darkness Energy card attached to your Darkness Pokémon now has the effect \"If the Pokémon Darkness Energy is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance).\" You can't use more than 1 Dark Shadow Poké-Body each turn.",
				fr: "Chaque carte Énergie de base Darkness attachée à votre Pokémon Darkness possède désormais l'effet 'Si le Pokémon auquel Énergie Obscurité est attachée attaque, cette attaque inflige 10 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).' Vous ne pouvez pas utiliser plus d'1 Poké-Body Ombre obscure par tour."
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
				en: "Endless Darkness",
				fr: "Obscurité sans fin"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep. Flip 2 coins instead of 1 between turns. If either of them is tails, the Defending Pokémon is still Asleep. If both of them are tails, the Defending Pokémon is Knocked Out.",
				fr: "Le Pokémon Défenseur est maintenant Endormi. Lancez 2 pièces au lieu d'1 entre deux tours. Si l'une d'elle est pile, le Pokémon Défenseur est toujours Endormi. Si ce sont deux piles, le Pokémon Défenseur est mis K.O."
			},
			damage: 40,

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
			value: "-20"
		},
	],




}

export default card
