import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "カバルドン",
		'zh-tw': "河馬獸",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "怒らせると かなり 狂暴。 取りこんだ 砂を 噴き出して 砂嵐を 巻き起こす。",
		'zh-tw': "生氣的時候非常凶暴。會噴出儲存在體內的沙子來引發沙塵暴。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶちかます" },
			damage: 120,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
		{
			name: { ja: "サンドプレス" },
			damage: 220,
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560455,
				tcgplayer: 569171,
			},
		},
	],

	evolveFrom: {
		ja: "ヒポポタス",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Common",
	dexId: [450],
};

export default card;
