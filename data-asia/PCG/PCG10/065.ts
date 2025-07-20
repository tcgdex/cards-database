import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "アグロン",
	},


	category: "Pokemon",
	dexId: [306],
	hp: 110,
	types: ["Metal"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "テラフォーミング",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、デッキの上位5枚のカードを見て、任意の順序でデッキの上に戻すことができます。 Aggronが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "金属爪",
			},
			damage: 50,
		},
		{
			cost: ["Metal", "Metal", "Colorless", "Colorless"],
			name: {
				ja: "ミックスアップ",
			},
			effect: {
				ja: "あなたの対戦相手は彼または彼女のデッキの一番上のカードを捨てます。",
			},
			damage: 70,
		},
	],

	retreat: 4,

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
