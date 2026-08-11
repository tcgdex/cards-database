import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "エアームド",
		'zh-tw': "盔甲鳥",
		'zh-cn': "盔甲鳥",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "頑丈で 重そうな 鉄の 体だが 薄くて 軽いので 時速３００キロで とべる。",
		'zh-tw': "鐵的身體雖然看起來結實沉重， 但其實又薄又輕，因此牠的 飛行速度可達時速３００公里。",
		'zh-cn': "鐵的身體雖然看起來結實沉重， 但其實又薄又輕，因此牠的 飛行速度可達時速３００公里。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はねやすめ",
				'zh-tw': "羽棲",
				'zh-cn': "羽棲",
			},
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンのHPを「50」回復する。次の自分の番、このポケモンはにげられない。",
				'zh-tw': "將這隻寶可夢恢復「50」HP。在下個自己的回合，這隻寶可夢無法撤退。",
				'zh-cn': "將這隻寶可夢恢復「50」HP。在下個自己的回合，這隻寶可夢無法撤退。",
			},
		},
		{
			name: {
				ja: "メタルクロー",
				'zh-tw': "金屬爪",
				'zh-cn': "金屬爪",
			},
			damage: 60,
			cost: ["Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821906,
				tcgplayer: 628715,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [227],
};

export default card;
