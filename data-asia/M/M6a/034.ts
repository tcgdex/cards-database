import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "ほっぺたの 両側に 小さい 電気袋を 持つ。 ピンチのときに 放電する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "うわがきボルト" },
			damage: 10,
			cost: ["Lightning"],
			effect: {
				ja: "次の自分の番の終わりまで、このワザを受けたポケモンの弱点は[L]タイプになる。［弱点は「×2」でダメージ計算をする。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908212,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [25],
};

export default card;
