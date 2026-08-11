import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カブトップス",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [141],
	hp: 90,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "原始オーラ",
			},
			effect: {
				'ja-jp': "Kabutopsがあなたのアクティブなポクモンである限り、どちらのプレイヤーも、ベンチでベンチポクモンを進化させるために彼または彼女の手から基本的なポクモンカードや進化カードをプレイすることはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				'ja-jp': "デュアルカット",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の50回のダメージ時間を実行します。",
			},
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
			stamp: ["1st edition"],
		},
	],
};

export default card
