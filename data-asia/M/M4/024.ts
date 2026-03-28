import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "クレベース",
	},

	illustrator: "Tomoki Sone",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ひょうざんくずし"}, "cost": ["Water"], "damage": "60×", "effect": {"ja": "自分の山札を上から6枚トラッシュし、その中にある「基本エネルギー」の枚数×60ダメージ。"}}, {"name": {"ja": "フロストスタンプ"}, "cost": ["Water", "Water", "Colorless", "Colorless"], "damage": 160}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "カチコール",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [713],
};

export default card;
