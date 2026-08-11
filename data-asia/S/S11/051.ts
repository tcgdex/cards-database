import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "イエッサン",
		'zh-tw': "愛管侍",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "高い 知能を もつ ポケモン。 仲間同士で ツノを 寄せあい 情報 交換を する。",
		'zh-tw': "擁有高度智能的寶可夢，能透過夥伴間角與角的互碰 來彼此交換訊息。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "スマートサーブ",
				'zh-tw': "伶俐服務",
			},
			cost: ["Colorless"],
			effect: {
				ja: "このワザは、先攻プレイヤーの最初の番でも使える。自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
				'zh-tw': "這個招式在先攻玩家的最初回合也可使用。從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ひらてうち",
				'zh-tw': "掌擊",
			},
			damage: 40,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667926,
				tcgplayer: 569982,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [876],
};

export default card;
