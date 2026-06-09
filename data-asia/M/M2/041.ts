import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "アノホラグサ",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "頭の 枝を 開いて 獲物を 飲みこむ。 生気を 存分に 吸い取ると 吐き出して 捨てるのだ。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "パニックプリズン"}, "effect": {"ja": "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンをこんらんにする。"}}],

	attacks: [{"name": {"ja": "ねんどうだん"}, "damage": 80, "cost": ["Psychic", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "アノクサ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [947],

	thirdParty: {
		cardmarket: 850548,
		tcgplayer: 655820,
	},
};

export default card;