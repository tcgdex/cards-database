import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ウッウ",
		'zh-tw': "古月鳥",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "相手を 一撃で 打ち負かすほど パワフルだが 忘れっぽいので 戦っている 相手を 忘れる。",
		'zh-tw': "雖然擁有一擊定勝負的威力，但因為記性實在太差， 對戰還沒結束就會忘記對手是誰。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ロストプロバイド",
				'zh-tw': "放逐供應",
			},
			effect: {
				ja: "自分のロストゾーンにカードが4枚以上あるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。",
				'zh-tw': "若自己的放逐區有4張以上的卡，則這隻寶可夢使用招式所需的能量全部消除。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "おとぼけスピット",
				'zh-tw': "裝傻噴吐",
			},
			damage: 110,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このワザのダメージは弱点を計算しない。",
				'zh-tw': "這個招式的傷害不計算弱點。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667908,
				tcgplayer: 569964,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [845],
};

export default card;
