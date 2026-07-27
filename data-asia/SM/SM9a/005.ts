import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "ウツボット",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "ジャングルの 奥地に ウツボット ばかり いる 地帯が あって 行ったら ２度と 帰ってこれない。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "どくへんげ" },
			damage: "10+",
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンが受けている特殊状態の数x60ダメージ追加。",
			},
		},
		{
			name: { ja: "いえき" },
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番の終わりまで、このワザを受けたポケモンが持つ特性はなくなる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558192,
			},
		},
	],

	evolveFrom: {
		ja: "ウツドン",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [71],
};

export default card;
