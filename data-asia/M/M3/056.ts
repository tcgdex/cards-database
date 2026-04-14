import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ニダンギル",
	},

	illustrator: "Kamome Shirahama",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "進化して ２本に 分裂した。 テレパシーで 会話して 連携攻撃で 敵を 切り刻む。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ソードウェポン"}, "damage": "60x", "cost": ["Colorless", "Colorless"], "effect": {"ja": "自分の手札から「ヒトツキ」「ニダンギル」「ギルガルド」を好きなだけ相手に見せて、その枚数×60ダメージ。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ヒトツキ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [680],

	thirdParty: {
		cardmarket: 867978,
		tcgplayer: 674375,
	},
};

export default card;