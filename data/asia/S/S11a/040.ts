import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "クチートVSTAR",
		'zh-tw': "大嘴娃VSTAR",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "スターロンド",
				'zh-tw': "星星迴旋曲",
			},
			effect: {
				ja: "このポケモンがベンチにいるなら、自分の番に使える。このポケモンを自分のバトルポケモンと入れ替える。その後、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "若這隻寶可夢在備戰區，則在自己的回合時可使用。將這隻寶可夢與自己的戰鬥寶可夢互換。然後，選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "サドンイーター",
				'zh-tw': "乍然食客",
			},
			damage: "90+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、90ダメージ追加。",
				'zh-tw': "在這個回合，若從備戰區將這隻寶可夢放置於戰鬥場，則增加90點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673038,
				tcgplayer: 570803,
			},
		},
	],

	evolveFrom: {
		ja: "クチートV",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [303],
};

export default card;
