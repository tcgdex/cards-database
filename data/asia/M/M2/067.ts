import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "エテボース",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "大きな 木の上で 暮らす。 仲間と 尻尾を つなぐことで 気持ちを 伝え合うと いわれる。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ビンタ"}, "damage": 50, "cost": ["Colorless", "Colorless"]}, {"name": {"ja": "デュアルテール"}, "cost": ["Colorless", "Colorless", "Colorless"], "effect": {"ja": "このポケモンについているエネルギーを2個トラッシュし、相手のポケモン2匹に、それぞれ60ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "エイパム",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [424],

	thirdParty: {
		cardmarket: 850575,
		tcgplayer: 655846,
	},
};

export default card;