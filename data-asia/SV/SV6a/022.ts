import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニンフィア",
		'zh-tw': "仙子伊布",
	},

	illustrator: "Kuroimori",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "触角を なびかせ 軽やかに 舞う 姿は 優雅だが 技は 鋭く 急所を 狙う。",
		'zh-tw': "搖曳著觸角跳著輕快 舞蹈的樣子相當優雅， 但招式卻會直搗對手要害。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ミスティックリターン",
				'zh-tw': "奧密迴旋",
			},
			cost: ["Psychic"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、相手の山札にもどして切る。",
				'zh-tw': "擲1次硬幣若為正面，則選擇1隻對手的備戰寶可夢，將那隻寶可夢與附加的卡全部放回對手的牌庫並重洗。",
			},
		},
		{
			name: {
				ja: "チャームボイス",
				'zh-tw': "魅惑之聲",
			},
			damage: 90,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773771,
				tcgplayer: 566273,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [700],
};

export default card;
