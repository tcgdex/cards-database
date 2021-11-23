import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko"
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Exeggcute",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Super Eggsplosion",
				fr: "Super éclate"
			},
			effect: {
				en: "Discard any number of Energy cards attached to any of your Pokémon. Flip a number of coins equal to the number of Energy cards discarded this way. This attack does 40 damage times the number of heads.",
				fr: "Vous pouvez vous défausser de n'importe quel nombre de cartes Énergie attachées n'importe lequel de vos Pokémon. Lancez un nombre de pièces égal au nombre de cartes Énergie que vous avez défaussé de cette manière. Cette attaque fait 40 dégâts multipliés par le nombre de faces."
			},
			damage: "40×",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Called Shot",
				fr: "Tir légal"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage times the amount of Energy attached to Exeggutor. (Don't apply Weakness or Resistance for Benched Pokémon)",
				fr: "Choisissez un des Pokémon du Banc de votre adversaire. Cette attaque inflige 10 dégâts multipliés par la quantité d'Énergie  attachée à Noadkoko. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)"
			}

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
