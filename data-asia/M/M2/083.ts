import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "カルボウ",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "焼けた 木炭に 命が 宿り ポケモンになった。 燃える 闘志で 強敵にも 戦いを 挑む。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ちからをあつめる"}, "cost": ["Fire"], "effect": {"ja": "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"}}, {"name": {"ja": "チョップ"}, "damage": 10, "cost": ["Fire"]}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [935],

	thirdParty: {
		cardmarket: 850591,
		tcgplayer: 655862,
	},
};

export default card;