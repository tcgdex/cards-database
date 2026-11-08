import { Card } from "models/database/card";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニダンギル",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		'ja-jp': "進化して ２本に 分裂した。 テレパシーで 会話して 連携攻撃で 敵を 切り刻む。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ソードウェポン"}, "damage": "60x", "cost": ["Colorless", "Colorless"], "effect": {"ja": "自分の手札から「ヒトツキ」「ニダンギル」「ギルガルド」を好きなだけ相手に見せて、その枚数×60ダメージ。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "holo"}],

	evolveFrom: {
		'ja-jp': "ヒトツキ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [680],

	thirdParty: {
		cardmarket: 868101,
		tcgplayer: 674410,
	},
};

export default card;