import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "サンドパン",
	},

	illustrator: "imoniii",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "すばしっこく 走りまわり 背中の針と 鋭いツメでの 攻撃が 得意。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "すなかけ"}, "damage": 50, "cost": ["Colorless", "Colorless"], "effect": {"ja": "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。"}}, {"name": {"ja": "マッドショット"}, "damage": 100, "cost": ["Fighting", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "サンド",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [28],

	thirdParty: {
		cardmarket: 840312,
		tcgplayer: 647130,
	},
};

export default card;