import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "マギアナ",
		'zh-tw': "瑪機雅娜",
	},

	illustrator: "Rianti Hidayat",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "およそ ５００年前 科学者に よって 作られた。 ソウルハートと 呼ばれる パーツが 本体なのだ。",
		'zh-tw': "由大約５００年前的 科學家所製造。 本體是被稱為魂心的零件。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ギアカッター",
				'zh-tw': "齒輪刀",
			},
			damage: 20,
			cost: ["Metal"],
		},
		{
			name: {
				ja: "からくりビーム",
				'zh-tw': "機關光束",
			},
			damage: "60+",
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、60ダメージ追加し、相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651109,
				tcgplayer: 569893,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [801],
};

export default card;
