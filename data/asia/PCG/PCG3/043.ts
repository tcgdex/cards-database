import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "暗い催眠",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [97],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ダークリンク",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、その名前が暗い（これを除く）、プレイ中の1つのポケモンの攻撃を選択します。ダークリンクは、エネルギーコストを除いて攻撃するコピーをコピーします。 （あなたはまだその攻撃に必要な他のことをしなければなりません。）（ポケモンがどんなタイプであっても、Dark Hypnoのタイプはまだ精神的なものです。）Dark Hypnoはその攻撃を実行します。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "ブラックマジック",
			},
			effect: {
				ja: "対戦相手のベンチポケモンの数を20回ダメージします。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
