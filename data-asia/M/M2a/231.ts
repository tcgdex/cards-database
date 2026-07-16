import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "メガズルズキンex",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はんげきトサカ" },
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを5個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アウトローレッグ" },
			damage: 160,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。相手の山札を上から1枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861474,
			},
		},
	],

	evolveFrom: {
		ja: "ズルッグ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [560],

	suffix: "EX",
};

export default card;
