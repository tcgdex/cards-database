import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ザルード",
		'zh-tw': "薩戮德",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "体に 生える ツルは ちぎれると 土の 栄養分となって 森の 植物たちを 育てるのだ。",
		'zh-tw': "生長在身上的藤蔓斷落後會化為土壤的養分，孕育森林裡的各種植物。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "むれよびのうた",
				'zh-tw': "極巨之魂",
			},
			cost: ["Grass"],
			effect: {
				ja: "自分の山札から[草]ポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。後攻プレイヤーの最初の番なら、手札に加えられる[草]ポケモンの枚数は3枚までになる。",
				'zh-tw': "增加自己的場上寶可夢身上附加的【超】能量的數量×30點傷害。",
			},
		},
		{
			name: { ja: "さみだれのムチ" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[草]エネルギーの数×20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560426,
				tcgplayer: 569142,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [893],
};

export default card;
