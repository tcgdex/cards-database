import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "beedrill",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [15],
	hp: 80,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "毒スプレー",
			},
			effect: {
				ja: "アクティブなポケモンを進化させるために手からbeedrillを演奏すると、防御するポケモンは麻痺し、毒されます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "針ラッシュ",
			},
			effect: {
				ja: "4コインをひっくり返します。 1ヘッドを獲得した場合、この攻撃は10ダメージに加えて10ダメージを与えます。 2つのヘッドを獲得した場合、この攻撃は10ダメージに加えて20ダメージを与えます。 3ヘッドを獲得した場合、この攻撃は10ダメージに加えて50ダメージを与えます。 4ヘッドを獲得した場合、この攻撃は10ダメージに加えて90ダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st Edition"],
		},
	],
};

export default card
