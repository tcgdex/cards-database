import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ディアンシー",
		'zh-tw': "蒂安希",
	},

	illustrator: "Haruko Ichikawa",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "両手の すきまで 空気中の 炭素を 圧縮して たくさんの ダイヤを 一瞬で 生み出す。",
		'zh-tw': "在雙手的間隙中壓縮空氣中的碳元素，轉瞬間變出許多鑽石。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "プリンセスカーテン",
				'zh-tw': "公主帷幔",
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、自分のベンチのたねポケモン全員は、相手が手札からサポートを出して使ったとき、その効果を受けない。",
				'zh-tw': "只要這隻寶可夢在戰鬥場上，對手從手牌使出支援者時，自己的備戰區的所有【基礎】寶可夢不會受到其效果的影響。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "スパイクドロー",
				'zh-tw': "扣殺抽出",
			},
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を2枚引く。",
				'zh-tw': "從自己的牌庫抽出2張卡。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687748,
				tcgplayer: 571724,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Illustration rare",
	dexId: [719],
};

export default card;
