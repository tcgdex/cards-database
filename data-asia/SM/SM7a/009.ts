import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・ブルル",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "ウラウラの 守り神で 物臭。 草木を 操り 敵を 縛りつけ 動きを 止めて 角で 一突き。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ハッスルパンチ" },
			damage: "20×",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンの数x20ダメージ。",
			},
		},
		{
			name: { ja: "ワイルドタックル" },
			damage: 120,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558897,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [787],
};

export default card;
