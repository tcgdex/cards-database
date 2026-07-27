import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロアークGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "とりひき" },
			effect: {
				ja: "自分の番に1回使える。自分の手札を1枚トラッシュする。その後、山札を2枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ライオットビート" },
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場のポケモンの数x20ダメージ。",
			},
		},
		{
			name: { ja: "トリックスターGX" },
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "相手の場のポケモンが持っているワザを1つ選び、このワザとして使う。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551651,
			},
		},
	],

	evolveFrom: {
		ja: "ゾロア",
	},

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [571],

	suffix: "GX",
};

export default card;
