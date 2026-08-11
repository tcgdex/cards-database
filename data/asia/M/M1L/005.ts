import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ナッシー",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "歩く 熱帯雨林 と呼ばれる。 実の ひとつひとつに 顔があって それぞれ 意思を 持っている。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ガードプレス"}, "damage": 30, "cost": ["Grass"], "effect": {"ja": "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"}}, {"name": {"ja": "ウッドスタンプ"}, "damage": "60+", "cost": ["Colorless", "Colorless", "Colorless"], "effect": {"ja": "このポケモンについているエネルギーの数×30ダメージ追加。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "アローラナッシー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [103],

	thirdParty: {
		cardmarket: 840154,
		tcgplayer: 647114,
	},
};

export default card;