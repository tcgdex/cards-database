import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		635,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cruel Fang",
				fr: "Croc Cruel",
			},
			effect: {
				en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 40 (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par les attaques du Pokémon Défenseur sont réduits de 40 (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Burn",
				fr: "Brûlure Obscure",
			},
			effect: {
				en: "Discard as many Darkness Energy attached to your Pokémon as you like. This attack does 50 damage times the amount of Darkness Energy you discarded in this way.",
				fr: "Défaussez autant d’Énergies Darkness attachées à vos Pokémon que vous voulez. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie Darkness défaussées de cette façon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
