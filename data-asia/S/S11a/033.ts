import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ナッシー",
		'zh-tw': "椰蛋樹",
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "３つの 頭は べつのことを 考えている。 自分以外は あまり 興味がない ようだ。",
		'zh-tw': "３顆頭都想著不同的事。對自己以外的事情似乎都沒什麼興趣。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "パワフルストーム",
				'zh-tw': "強力風暴",
			},
			damage: "20×",
			cost: ["Psychic"],
			effect: {
				ja: "自分の場のポケモンについているエネルギーの数×20ダメージ。",
				'zh-tw': "造成自己的場上寶可夢身上附加的能量的數量×20點傷害。",
			},
		},
		{
			name: {
				ja: "ふむ",
				'zh-tw': "踩",
			},
			damage: 100,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673031,
				tcgplayer: 570796,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570883,
			},
		},
	],

	evolveFrom: {
		ja: "タマタマ",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [103],
};

export default card;
