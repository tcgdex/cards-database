import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アルカニン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [59],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "エネルギー充電",
			},
			effect: {
				'ja-jp': "アクティブなポケモンを進化させるために手からアルカニンを演奏すると、3コインをひっくり返すことができます。ヘッドごとに、廃棄パイルから基本的なエネルギーカードを選択し、アルカニンに取り付けます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "振る",
			},
			effect: {
				'ja-jp': "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				'ja-jp': "白い炎",
			},
			effect: {
				'ja-jp': "アルカニンに取り付けられたすべての消防エネルギーカードを廃棄します。",
			},
			damage: 70,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",

		},
		{
			type: "normal",
			stamp: ["1st Edition"],
		},
	],
};

export default card
