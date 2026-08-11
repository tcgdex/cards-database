import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ラティアス（デルタ種）",
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
				ja: "デルタオーラ",
			},
			effect: {
				ja: "LatiosまたはLatios Exがプレイされている場合、LatiasのExtra Crushの攻撃コストは今ではLightningmetalcolorlessになりました。",
			},
		}],

	attacks: [
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "スパイラルドレイン",
			},
			effect: {
				ja: "Latiasから2つのダメージカウンターを削除します。",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Metal", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "余分なクラッシュ",
			},
			effect: {
				ja: "対戦相手がPokemon-Exをプレイしていない場合、この攻撃は何もしません。",
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
