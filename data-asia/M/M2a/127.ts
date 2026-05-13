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
		ja: "雲より はるか上の オゾン層に  生息しているため 地上から  姿を 見ることは できない。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "アサルトブレイク"}, "damage": "20+", "cost": ["Lightning"], "effect": {"ja": "この番に、このポケモンがベンチからバトル場に出ていたなら、90ダメージ追加。"}}, {"name": {"ja": "ドラゴンクロー"}, "damage": "130", "cost": ["Fire", "Lightning"], "effect": {"ja": ""}}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [384],
};

export default card;
