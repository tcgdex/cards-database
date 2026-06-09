import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ビブラーバ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "未熟な 翅は 飛ぶことよりも 擦って 超音波を 出して 敵を 攻撃するのに 使う。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ちょうしんどう"}, "damage": 60, "cost": ["Fighting", "Fighting"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ナックラー",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [329],

	thirdParty: {
		cardmarket: 850553,
		tcgplayer: 655825,
	},
};

export default card;