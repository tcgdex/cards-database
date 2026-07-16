import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "クリムガン",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 110,
	types: ["Dragon"],

	description: {
		ja: "日光を 翼で 受けて 体を 温める。 体温が 下がると 動けなくなってしまう。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "さめはだ" },
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ドラゴンクロー" },
			damage: 100,
			cost: ["Fire", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559300,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [621],
};

export default card;
