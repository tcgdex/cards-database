import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "雲より はるか上の オゾン層に 生息しているため 地上から 姿を 見ることは できない。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "アサルトブレイク"}, "cost": ["Lightning", "Colorless"], "damage": "20＋", "effect": {"ja": "この番に、このポケモンがベンチからバトル場に出ていたなら、90ダメージ追加。"}}, {"name": {"ja": "ドラゴンクロー"}, "cost": ["Fire", "Lightning", "Colorless"], "damage": 130}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [384],
};

export default card;
