import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "イッカネズミ",
		'zh-tw': "一家鼠",
		'zh-cn': "一家鼠",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "大きな ２匹が 子どもたちを 守りながら 戦う。 強い 相手には 全員で 立ち向かう。",
		'zh-tw': "身型大的２隻會在戰鬥的 同時保護著孩子。對抗實力 強大的對手時會集體出陣。",
		'zh-cn': "身型大的２隻會在戰鬥的 同時保護著孩子。對抗實力 強大的對手時會集體出陣。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ファミリーマーチ",
				'zh-tw': "家族行軍",
				'zh-cn': "家族行軍",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「イッカネズミ（『ポケモンex』をふくむ）」を2枚まで選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張「一家鼠（包含『寶可夢【ex】』）」，放置於備戰區。並且重洗牌庫。",
				'zh-cn': "從自己的牌庫選擇最多2張「一家鼠（包含『寶可夢【ex】』）」，放置於備戰區。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "れんぞくまえば",
				'zh-tw': "連續門牙",
				'zh-cn': "連續門牙",
			},
			damage: "30×",
			cost: ["Colorless"],
			effect: {
				ja: "コインを4回投げ、オモテの数×30ダメージ。",
				'zh-tw': "擲4次硬幣，造成正面出現的次數×30點傷害。",
				'zh-cn': "擲4次硬幣，造成正面出現的次數×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793526,
				tcgplayer: 587672,
			},
		},
	],

	evolveFrom: {
		ja: "ワッカネズミ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [925],
};

export default card;
