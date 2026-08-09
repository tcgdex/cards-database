import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "キチキギス",
		'zh-tw': "吉雉雞",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "艶やかな 翼を 羽ばたかせて フェロモンを 振りまき 人や ポケモンを 蠱惑に 魅了する。",
		'zh-tw': "會拍動豔麗的翅膀散佈 費洛蒙，使人類和寶可夢 神魂顛倒，為牠著迷。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "アドレナフェロモン",
				'zh-tw': "腎上腺費洛蒙",
			},
			effect: {
				ja: "このポケモンに[D]エネルギーがついているなら、このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
				'zh-tw': "若這隻寶可夢身上附有【惡】能量卡，則這隻寶可夢受到招式的傷害時，自己擲1次硬幣。若為正面，則這隻寶可夢不會受到那個傷害。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "エナジーフェザー",
				'zh-tw': "能量羽毛",
			},
			damage: "30×",
			cost: ["Psychic"],
			effect: {
				ja: "このポケモンについているエネルギーの数×30ダメージ。",
				'zh-tw': "造成這隻寶可夢身上附加的能量的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767542,
				tcgplayer: 568098,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [1016],
};

export default card;
