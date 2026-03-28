import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ドンファン",
	},

	illustrator: "Julie Hang",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "たたみかける"}, "cost": ["Fighting"], "damage": 20, "effect": {"ja": "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。"}}, {"name": {"ja": "スマッシュヘッド"}, "cost": ["Fighting", "Colorless", "Colorless", "Colorless"], "damage": 180, "effect": {"ja": "このポケモンについているエネルギーを2個選び、トラッシュする。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ゴマゾウ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [232],
};

export default card;
