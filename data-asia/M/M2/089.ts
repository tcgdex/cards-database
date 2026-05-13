import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ストリンダー",
	},

	illustrator: "Terada Tera",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "毒の 汗を ほとばしらせながら 電気を 放つとき あたりに ギターのような メロディが 響く。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "バッドアッパー"}, "effect": {"ja": "自分の番に1回使える。自分の山札から「基本エネルギー」を1枚選び、ベンチのポケモンにつける。そして山札を切る。その後、つけたポケモンにダメカンを2個のせる。"}}],

	attacks: [{"name": {"ja": "ひっぱたく"}, "damage": 100, "cost": ["Darkness", "Darkness", "Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "エレズン",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [849],

	thirdParty: {
		cardmarket: 850597,
		tcgplayer: 655868,
	},
};

export default card;