import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "レドームシ",
		'zh-tw': "天罩蟲",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "ほぼ 動かないが 生きている。 飲まず食わずで 殻に こもるうち 超能力に 目覚めたらしい。",
		'zh-tw': "雖然幾乎從來不動但還是活著的。牠的超能力似乎是在縮在殼裡 不吃不喝的過程中覺醒的。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "バリアアタック",
				'zh-tw': "屏障攻擊",
			},
			damage: 30,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651068,
				tcgplayer: 569852,
			},
		},
	],

	evolveFrom: {
		ja: "サッチムシ",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [825],
};

export default card;
