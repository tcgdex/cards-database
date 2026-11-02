import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ネッコアラ",
		'zh-tw': "樹枕尾熊",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "死ぬまで ずっと 眠ったままなのは エサの 葉っぱに 麻酔の ような 成分が 含まれているからだ。",
		'zh-tw': "終其一生都處於睡著的狀態。 這是因為牠所吃的葉子裡 含有類似麻醉藥的成分。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ゆめおち",
				'zh-tw': "一場夢",
			},
			effect: {
				ja: "このポケモンがねむりなら、相手のポケモンからワザのダメージを受けてきぜつしても、相手はサイドをとれない。",
				'zh-tw': "若這隻寶可夢在【睡眠】，則就算受到對手的寶可夢招式的傷害而【氣絕】，對手也無法獲得獎賞卡。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "たおれこむ",
				'zh-tw': "倒下",
			},
			damage: 60,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをねむりにする。",
				'zh-tw': "將這隻寶可夢【睡眠】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651118,
				tcgplayer: 569902,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [775],
};

export default card;
