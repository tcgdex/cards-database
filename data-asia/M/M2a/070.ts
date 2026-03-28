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

	attacks: [{"name": {"ja": "コールサイン"}, "cost": ["Psychic"], "effect": {"ja": "自分の山札からポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。"}}, {"name": {"ja": "サイコショット"}, "cost": ["Psychic"], "damage": 30}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ラルトス",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [281],
};

export default card;
