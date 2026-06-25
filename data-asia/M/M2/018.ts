import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "オドリドリex",
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "エキサイトターボ"}, "effect": {"ja": "自分の場にタイプの「メガシンカex」がいるなら、自分の番に何回でも使える。自分の手札から「基本エネルギー」を1枚選び、ベンチのポケモンにつける。"}}],

	attacks: [{"name": {"ja": "ほのおのつばさ"}, "damage": 110, "cost": ["Fire", "Fire", "Colorless"]}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [741],

	suffix: "EX",

	thirdParty: {
		cardmarket: 850525,
		tcgplayer: 655797,
	},
};

export default card;