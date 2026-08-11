import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "xatu",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [178],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ミラーコート",
			},
			effect: {
				'ja-jp': "Xatuが対戦相手の攻撃によって焼かれたり毒されたりした場合（Xatuがノックアウトされたとしても）、攻撃するポカモンは同じ特別な条件の影響を受けます（1が1つしかない場合）。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "まばゆいばかりのダンス",
			},
			effect: {
				'ja-jp': "防御するポケモンはそれぞれ混乱しています。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'ja-jp': "ピループ",
			},
			effect: {
				'ja-jp': "30のダメージに加えて、対戦相手がプレイしているトレーナーカードごとに30ダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
