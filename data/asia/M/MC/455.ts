import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ミカルゲ",
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "いつも 悪さばかり していたら 不思議な 術で 本体を 要石に 縛りつけられた。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "うらみのうず" },
			effect: {
				ja: "このポケモンがいるかぎり、自分のバトル場の[D]ポケモンが、相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを1個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "やまくずし" },
			damage: 10,
			cost: ["Darkness"],
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863757,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [442],
};

export default card;
