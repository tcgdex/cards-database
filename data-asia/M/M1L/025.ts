import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ハリテヤマ",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "力くらべが 大好き。 走ってくる 列車を 張り手で 止めてしまう パワーを 持つ。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "どすこいキャッチャー"}, "effect": {"ja": "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"}}],

	attacks: [{"name": {"ja": "ワイルドプレス"}, "damage": 210, "cost": ["Fighting", "Fighting", "Fighting"], "effect": {"ja": "このポケモンにも70ダメージ。"}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "マクノシタ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [297],

	thirdParty: {
		cardmarket: 840316,
		tcgplayer: 647134,
	},
};

export default card;