import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "エレズン",
		'zh-tw': "毒電嬰",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "毒素を 化学変化 させて 電気を 出す。 電力は 弱いが ビリビリと 痺れる。",
		'zh-tw': "透過讓自身的毒素產生化學反應來發電。電力雖然弱，卻能造成麻痺。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "なきごえ",
				'zh-tw': "叫聲",
			},
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-30」點。",
			},
		},
		{
			name: {
				ja: "プチボルト",
				'zh-tw': "小伏特",
			},
			damage: 10,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575591,
				tcgplayer: 569537,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [848],
};

export default card;
