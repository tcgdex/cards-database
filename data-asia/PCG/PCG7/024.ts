import { Card } from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		ja: "ギャラドス（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "デルタリアクター",
			},
			effect: {
				ja: "ホロンがその名に載っているスタジアムカードが存在している限り、カードにデルタを持っているポカンはそれぞれ、防御するポカンにさらに10ダメージを与えます（脱力感と抵抗を適用する前）。",
			},
		}],

	attacks: [
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "ハイパービーム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Metal", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "重い衝撃",
			},
			damage: 80,
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
