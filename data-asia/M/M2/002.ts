import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "クサイハナ",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "少しずつ 染みだしてくるのは よだれではない。 蜜のような汁で 獲物を おびき寄せているのだ。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "よだれまき"}, "damage": 20, "cost": ["Grass"], "effect": {"ja": "おたがいのベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ナゾノクサ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [44],

	thirdParty: {
		cardmarket: 850509,
		tcgplayer: 655781,
	},
};

export default card;