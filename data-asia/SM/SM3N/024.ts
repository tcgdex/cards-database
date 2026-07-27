import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャスパー",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "強力な サイコパワーが 漏れ出さないように 放出する 器官を 耳で ふさいでいるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まどわすひとみ" },
			cost: ["Colorless"],
			effect: {
				ja: "次の自分の番の終わりまで、このワザを受けたポケモンの弱点は[超]タイプになる。［弱点は「x2」でダメージ計算をする。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561024,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [677],
};

export default card;
