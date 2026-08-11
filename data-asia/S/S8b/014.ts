import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ザルード",
		'zh-tw': "薩戮德",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "体に 生える ツルは ちぎれると 土の 栄養分となって 森の 植物たちを 育てるのだ。",
		'zh-tw': "生長在身上的藤蔓斷落後會化為土壤的養分，孕育森林裡的各種植物。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "むれよびのうた",
				'zh-tw': "群喚之歌",
			},
			cost: ["Grass"],
			effect: {
				ja: "自分の山札から[草]ポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。後攻プレイヤーの最初の番なら、手札に加えられる[草]ポケモンの枚数は3枚までになる。",
				'zh-tw': "從自己的牌庫選擇1張【草】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。若在後攻玩家的最初回合使用，則可加入手牌的【草】寶可夢卡張數改為最多3張。",
			},
		},
		{
			name: {
				ja: "さみだれのムチ",
				'zh-tw': "反覆之鞭",
			},
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[草]エネルギーの数×20ダメージ追加。",
				'zh-tw': "增加這隻寶可夢身上附加的【草】能量的數量×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586529,
				tcgplayer: 571267,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [893],
};

export default card;
