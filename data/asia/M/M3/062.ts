import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "カビゴン",
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		ja: "胃袋の 消化液は どんな 毒も 消化できる。 落ちているものを 食べても 平気。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "おおぐい"}, "cost": ["Colorless"], "effect": {"ja": "ウラが出るまでコインを投げ、オモテの数ぶんまで、自分の山札から基本エネルギーを選び、このポケモンにつける。そして山札を切る。"}}, {"name": {"ja": "たおれこむ"}, "damage": 160, "cost": ["Colorless", "Colorless", "Colorless", "Colorless"], "effect": {"ja": "このポケモンをねむりにする。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 4,
	regulationMark: "I",
	rarity: "Common",
	dexId: [143],

	thirdParty: {
		cardmarket: 868040,
		tcgplayer: 674381,
	},
};

export default card;