import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "トロッゴン",
	},

	illustrator: "Apios",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "背中の 石炭の 山は 中で コールタールが 作られているため 高速で 走っても 崩れない。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ガードプレス"}, "cost": ["Fighting"], "damage": 20, "effect": {"ja": "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"}}, {"name": {"ja": "パワージェム"}, "cost": ["Fighting", "Colorless", "Colorless"], "damage": 60}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "タンドン",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [838],
};

export default card;
