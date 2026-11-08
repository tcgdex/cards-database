import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラティアス（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [380],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "デルタオーラ",
			},
			effect: {
				'ja-jp': "LatiosまたはLatios Exがプレイされている場合、LatiasのExtra Crushの攻撃コストは今ではLightningmetalcolorlessになりました。",
			},
		}],

	attacks: [
		{
			cost: ["Metal", "Colorless"],
			name: {
				'ja-jp': "スパイラルドレイン",
			},
			effect: {
				'ja-jp': "Latiasから2つのダメージカウンターを削除します。",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Metal", "Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "余分なクラッシュ",
			},
			effect: {
				'ja-jp': "対戦相手がPokemon-Exをプレイしていない場合、この攻撃は何もしません。",
			},
			damage: 80,
		},
	],

	retreat: 1,

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
