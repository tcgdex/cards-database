import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "マリィのオーロンゲex",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 320,
	types: ["Darkness"],

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "パンクアップ"}, "effect": {"ja": "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札から「基本「Darkness」エネルギー」を5枚まで選び、自分の「マリィのポケモン」に好きなようにつける。そして山札を切る。"}}],

	attacks: [{"name": {"ja": "シャドーバレット"}, "damage": "180", "cost": ["Darkness", "Darkness"], "effect": {"ja": "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "マリィのギモー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Special illustration rare",
};

export default card;
