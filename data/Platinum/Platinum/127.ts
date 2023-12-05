import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Shaymin",
		fr: "Shaymin",
		de: "Shaymin"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		492,
	],
	hp: 110,
	types: [
		"Grass",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Revenge Seed",
				fr: "Graine vengeresse",
				de: "Revenge Seed"
			},
			effect: {
				en: "If any of your Grass Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, each of Shaymin's attacks does 60 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Si les dégâts d'une attaque de votre adversaire a mis K.O 1 de vos Pokémon Grass lors de son tour précédent, chacune des attaques de Shaymin inflige 60 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
				de: "If any of your  Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, each of Shaymin's attacks does 60 more damage to the Active Pokémon (before applying Weakness and Resistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Energy Flare",
				fr: "Énergie éclatante",
				de: "Energy Flare"
			},
			effect: {
				en: "You may move any number of Energy cards attached to your Pokémon to your other Pokémon in any way you like.",
				fr: "Vous pouvez déplacer autant de cartes Énergie attachées à vos Pokémon que vous voulez sur vos autres Pokémon de la façon que vous voulez.",
				de: "You may move any number of Energy cards attached to your Pokémon to your other Pokémon in any way you like."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
