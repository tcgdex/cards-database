import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ガケガニex",
		'zh-tw': "布撥",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はんげきバサミ" },
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "フォーリングプレス",
				'zh-tw': "劈啪巴掌",
			},
			damage: "100+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、80ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693188,
				tcgplayer: 587784,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [950],

	suffix: "EX",
};

export default card;
