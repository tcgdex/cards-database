import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヘラクロス（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [214],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "輝くホーン",
			},
			effect: {
				'ja-jp': "ヘラクロスがあなたがプレイしている唯一のポカモンである限り、あなたの対戦相手の基本的なポカモンは攻撃できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "深く掘ります",
			},
			effect: {
				'ja-jp': "廃棄パイルを検索して、エネルギーカードを紹介し、相手に見せて、手に入れてください。",
			},
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				'ja-jp': "余分な爪",
			},
			effect: {
				'ja-jp': "防御ポケモンがポケモンエクスの場合、この攻撃は30ダメージと20ダメージを与えます。",
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
