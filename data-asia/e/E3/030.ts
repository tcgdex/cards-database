import { Card } from "../../../interfaces"
import Set from "../E3"

const card: Card = {
	set: Set,
	name: {
		ja: "テンタクルエル",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [73],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "奇妙な触手",
			},
			effect: {
				ja: "ターン中（攻撃の前）に一度、防御するポクモンに添付されているエネルギーカードの数がアクティブなポクモンに取り付けられたエネルギーカードの数よりも少ない限り、相手の捨てられた山にエネルギーカードを選択して、防御するポクモンにそれを取り付けることができます。 Tentacruelが特別な状態の影響を受けている場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "毒物",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 20,
		},
	],


	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		}, {
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
