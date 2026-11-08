import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カブトップス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [141],
	hp: 110,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "古代の殻",
			},
			effect: {
				'ja-jp': "OmanyteまたはOmastarがプレイされている限り、攻撃によってKabutopsに与えられた損害は20増加します（脱力感と抵抗を適用した後）。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				'ja-jp': "エネルギーストリーム",
			},
			effect: {
				'ja-jp': "廃棄の山を検索して、基本的なエネルギーカードを調べ、カブトップに添付してください。",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "余分な爪",
			},
			effect: {
				'ja-jp': "防御ポケモンがポケモン-Exの場合、この攻撃は50のダメージと30ダメージを与えます。",
			},
		},
	],

	retreat: 2,

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
