import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラパルトex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "ジェットヘッド"}, "cost": ["Colorless"], "damage": 70}, {"name": {"ja": "ファントムダイブ"}, "cost": ["Fire", "Psychic"], "damage": 200, "effect": {"ja": "ダメカン6個を、相手のベンチポケモンに好きなようにのせる。"}}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ドロンチ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
