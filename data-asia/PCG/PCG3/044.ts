import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いスローキング",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [199],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "unning",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、相手のデッキの一番上のカードを見ることができます。それから、あなたは彼または彼女のデッキをシャッフルするかもしれません。暗いスローキングが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "ごみ",
			},
			effect: {
				ja: "あなたの手から最大2匹のポケモンツールカードとロケットのシークレットマシンカードの組み合わせを捨てることができます。そうした場合、この攻撃は20のダメージに加えて、捨てたカードごとに30ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
