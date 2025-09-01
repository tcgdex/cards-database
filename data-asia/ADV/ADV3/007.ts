import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "ローゼリア",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [315],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "厚い肌",
			},
			effect: {
				ja: "ロゼリアは、特別な条件の影響を受けることはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "速度の成長",
			},
			effect: {
				ja: "あなたが好きな方法で、あなたの手からあなたの手からあなたの手から最大2つの草のエネルギーカードを取り付けます。",
			},
		},
		{
			cost: ["Grass"],
			name: {
				ja: "スリープパウダー",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 10,
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
