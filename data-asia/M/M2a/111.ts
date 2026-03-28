import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "Nのゾロア",
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "相手の 姿に 化けてみせて 驚かせる。 無口な 子どもに 化けていることが 多いらしい。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ひっかく"}, "cost": ["Darkness"], "damage": 20}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [570],
};

export default card;
