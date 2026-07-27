import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "マルノーム",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "口に 入る 大きさの ものなら なんでも まる飲み。 特殊な 胃液で なんでも 消化する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ドわすれ" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザを使えない。",
			},
		},
		{
			name: { ja: "まるのみ" },
			damage: "40+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンの残りHPが、このポケモンの残りHPより少ないなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559177,
			},
		},
	],

	evolveFrom: {
		ja: "ゴクリン",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [317],
};

export default card;
