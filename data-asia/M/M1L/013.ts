import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "メガバクーダex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "あぶりやき"}, "damage": "80+", "cost": ["Fire"], "effect": {"ja": "相手のバトルポケモンがやけどなら、160ダメージ追加。"}}, {"name": {"ja": "ボルケーノメテオ"}, "damage": 280, "cost": ["Fire", "Colorless", "Colorless", "Colorless"], "effect": {"ja": "このポケモンについているエネルギーを2個選び、トラッシュする。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ドンメル",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [323],

	suffix: "EX",

	thirdParty: {
		cardmarket: 840162,
		tcgplayer: 647122,
	},
};

export default card;