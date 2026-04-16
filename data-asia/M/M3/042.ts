import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ガメノデス",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "手足にも 脳が あり 勝手に 動けるが 普段は 頭の ガメノデスの 命令に 従う。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "ストーンアームズ"}, "effect": {"ja": "自分の番に1回使える。自分の手札から「基本エネルギー」を1枚選び、自分のポケモンにつける。"}}],

	attacks: [{"name": {"ja": "ぶちかます"}, "damage": 80, "cost": ["Fighting", "Fighting", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "カメテテ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [689],

	thirdParty: {
		cardmarket: 867964,
		tcgplayer: 674361,
	},
};

export default card;