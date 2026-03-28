import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "シロナのガバイト",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "まれに 脱皮し ウロコが 剥げる。 その成分が 含まれる 薬は 疲れた 体を ギンギンにする。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "おうじゃのよびごえ"}, "effect": {"ja": "自分の番に1回使える。自分の山札から「シロナのポケモン」を1枚選び、相手に見せて、手札に加える。そして山札を切る。"}}],

	attacks: [{"name": {"ja": "リューノスライス"}, "cost": ["Fighting"], "damage": 40}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "シロナのフカマル",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [444],
};

export default card;
