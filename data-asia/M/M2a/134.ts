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

	stage: "Stage2",

	attacks: [{"name": {"ja": "ジェットヘッド"}, "damage": "70", "cost": ["Colorless"], "effect": {"ja": ""}}, {"name": {"ja": "ファントムダイブ"}, "damage": "200", "cost": ["Fire", "Psychic"], "effect": {"ja": "ダメカン6個を、相手のベンチポケモンに好きなようにのせる。"}}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ドロンチ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
};

export default card;
