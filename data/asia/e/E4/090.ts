import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カブトップス",
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [141],
	hp: 90,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "クリスタルタイプ",
			},
			effect: {
				'ja-jp': "手からカブトップスまでの水、稲妻、または基本エネルギーカードとの戦いをするたびに、カブトップスのタイプ（色）はターンの終わりまでそのタイプのエネルギーと同じになります。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Water", "Colorless"],
			name: {
				'ja-jp': "排水カット",
			},
			effect: {
				'ja-jp': "Kabutopsからダメージカウンターを取り外します。",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Lightning", "Lightning", "Colorless"],
			name: {
				'ja-jp': "トリプルカッター",
			},
			effect: {
				'ja-jp': "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},
		},
	],

	retreat: 3,

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
