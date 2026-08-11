import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "メレシー",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "地下深くの 高温 高圧な 環境で 生まれた。 頭の 石から エネルギーを 放つ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ダブルタイプ" },
			effect: {
				ja: "このポケモンは、場にいるかぎり[F]と[P]の2つのタイプになる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "カウンタージュエル" },
			damage: "70+",
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "相手のサイドの残り枚数が2枚以下なら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864054,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [703],
};

export default card;
