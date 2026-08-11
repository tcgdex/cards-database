import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カツラのリザード",
	},
	illustrator: "Ken Sugimori",

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [5],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire", "Fire"],
			name: {
				'ja-jp': "火の爪",
			},
			damage: 30,
		},
		{
			cost: ["Fire", "Fire", "Fire"],
			name: {
				'ja-jp': "bonき火",
			},
			effect: {
				'ja-jp': "3コインをフリップします。それぞれの頭について、ブレインのチャームレオンに取り付けられた1つのファイアエネルギーカードを捨てます。エネルギーカードを破棄できない場合、この攻撃は何もしません。この攻撃は、対戦相手のポケモンのそれぞれにヘッド数を10回ダメージします。この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575363
			},
		},
	],
};

export default card
