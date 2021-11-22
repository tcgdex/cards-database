import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Delcatty ex",
		fr: "Delcatty ex"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		301,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Skitty",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Constrain",
				fr: "Limitation"
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. Each player discards cards until that player has 6 cards in his or her hand. (You discard first.) This power can't be used if Delcatty ex is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Chaque joueur défausse des cartes jusqu'à ce qu'il ne lui reste plus que 6 cartes en main. (Vous défaussez vos cartes en premier.) Ce pouvoir ne peut pas être utilisé si Delcatty ex est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Upstream",
				fr: "Remonter le courant"
			},
			effect: {
				en: "Search your discard pile for all Energy cards. This attack does 10 damage times the number of Energy cards you find there. Show them to your opponent, and put them on top of your deck. Shuffle your deck afterward.",
				fr: "Cherchez dans votre pile de défausse toutes les cartes Énergie. Cette attaque inflige 10 dégâts multipliés par le nombre de cartes Énergie que vous trouvez. Montrez-les à votre adversaire et placez-les au dessus de votre deck. Ensuite, mélangez votre deck."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Slap",
				fr: "Coud'keu"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
