import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ケッキングex",
		'zh-tw': "請假王ex",
		'zh-cn': "請假王ex",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 340,
	types: ["Colorless"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "さぼりたいしつ",
				'zh-tw': "懶怠個性",
				'zh-cn': "懶怠個性",
			},
			effect: {
				ja: "相手の場に「ポケモンex・V」がいないなら、このポケモンはワザが使えない。",
				'zh-tw': "若對手的場上沒有「寶可夢【ex】・【V】」，則這隻寶可夢無法使用招式。",
				'zh-cn': "若對手的場上沒有「寶可夢【ex】・【V】」，則這隻寶可夢無法使用招式。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "グレートスイング",
				'zh-tw': "偉大橫掃",
				'zh-cn': "偉大橫掃",
			},
			damage: 280,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
				'zh-cn': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793518,
				tcgplayer: 587664,
			},
		},
	],

	evolveFrom: {
		ja: "ヤルキモノ",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [289],

	suffix: "EX",
};

export default card;
