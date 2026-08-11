import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ファイヤー",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "美しく 燃えあがる 翼で 山道を 照らし 遭難者を 助けたと 言い伝えられている。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "とうしのつばさ"}, "damage": "20+", "cost": ["Fire"], "effect": {"ja": "相手のバトルポケモンが「ポケモンex」なら、90ダメージ追加。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [146],

	thirdParty: {
		cardmarket: 850521,
		tcgplayer: 655793,
	},
};

export default card;