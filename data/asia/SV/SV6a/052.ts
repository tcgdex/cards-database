import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌイコグマ",
		'zh-tw': "童偶熊",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "ふわふわの 毛並みは 触り心地が 抜群だが うかつに 手を だすと 手痛い 反撃を 受けてしまう。",
		'zh-tw': "毛茸茸的毛皮摸起來觸感超群， 但粗心大意地向牠伸出手的人 基本上都會遭到牠的劇烈反擊。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "とっしん",
				'zh-tw': "猛撞",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
				'zh-tw': "這隻寶可夢也受到10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773801,
				tcgplayer: 566303,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [759],
};

export default card;
