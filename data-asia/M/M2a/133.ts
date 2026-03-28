import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドロンチ",
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "肺に エネルギーを溜め 撃ち出す。 ドラメシヤが 立派に 育つまで 一緒に 戦い 世話もする。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "ていさつしれい"}, "effect": {"ja": "自分の番に1回使える。自分の山札を上から2枚見て、どちらか1枚を選び、手札に加える。残りのカードは、山札の下にもどす。"}}],

	attacks: [{"name": {"ja": "リューズヘッド"}, "cost": ["Fire", "Psychic"], "damage": 70}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ドラメシヤ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [886],
};

export default card;
