import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒットモンチャン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [107],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "進化の段階",
			},
			effect: {
				'ja-jp': "Hitmonchanが進化したポカモンである限り、Hitmonchanは+30 HPを取得します。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "重いパンチ",
			},
			effect: {
				'ja-jp': "対戦相手のベンチポケモンの数を10回ダメージします。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "スピーディーアッパーカット",
			},
			effect: {
				'ja-jp': "この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
			},
			damage: 50,
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
