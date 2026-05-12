import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "キルリア",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーを 操り まわりの 空間を ねじ曲げることで 未来を 見通すことができる。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "コールサイン"}, "damage": "", "cost": ["Psychic"], "effect": {"ja": "自分の山札からポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。"}}, {"name": {"ja": "サイコショット"}, "damage": "30", "cost": ["Psychic"], "effect": {"ja": ""}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ラルトス",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [281],
};

export default card;
