import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "キュレム",
		'zh-tw': "酋雷姆",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "強力な 冷凍エネルギーを 体内で 作り出すが 漏れ出した 冷気で 体が 凍っている。",
		'zh-tw': "在體內製造出強大的冷凍能量，但漏出的寒氣使身體結凍了。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "きょくげんれいとう",
				'zh-tw': "極限冰凍",
			},
			damage: "60×",
			cost: ["Water", "Water", "Metal"],
			effect: {
				ja: "自分の場のポケモンについている[水]エネルギーを好きなだけトラッシュし、その枚数×60ダメージ。",
				'zh-tw': "將自己的場上寶可夢身上附加的任意數量的【水】能量卡丟棄，造成其張數×60點傷害。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 571631,
				tcgplayer: 569368,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [646],
};

export default card;
