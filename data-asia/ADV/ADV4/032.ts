import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "ウォーレイン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [365],
	hp: 120,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "ドローを押しつぶします",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、デッキの一番上のカードを明らかにすることができます。そのカードが基本的なエネルギーカードの場合は、Pokã©Monの1つに添付してください。そうでない場合は、カードをデッキに戻します。 Walreinが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "寒い",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御する各ポケモンは、相手の次のターン中に攻撃することはできません。",
			},
			damage: 50,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
