import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "オドリドリex",
	},

	illustrator: "Shinji Kanda",
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
	rarity: "Special illustration rare",
	dexId: [741],

	suffix: "EX",

	thirdParty: {
		cardmarket: 850619,
		tcgplayer: 655887,
	},
};

export default card;