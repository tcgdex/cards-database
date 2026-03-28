import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ハリボーグ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "リーフチャージ"}, "cost": ["Grass"], "damage": 20, "effect": {"ja": "自分の山札から「基本エネルギー」を1枚選び、このポケモンにつける。そして山札を切る。"}}, {"name": {"ja": "つるのムチ"}, "cost": ["Grass", "Grass", "Colorless"], "damage": 80}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ハリマロン",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [651],
};

export default card;
