import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "グレッグル",
		'zh-tw': "不良蛙",
	},

	illustrator: "Aliya Chen",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "正々堂々と 戦うことは 少ないが それも 生き延びるため。 マスコットとして 人気が 高い。",
		'zh-tw': "很少會堂堂正正地戰鬥， 但那都是為了要生存下去。 作為吉祥物非常受歡迎。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "なぐる",
				'zh-tw': "打擊",
			},
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: {
				ja: "かえるとび",
				'zh-tw': "蛙跳",
			},
			damage: "20+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773772,
				tcgplayer: 566274,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [453],
};

export default card;
