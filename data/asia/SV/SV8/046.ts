import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲチック",
		'zh-tw': "波克基古",
		'zh-cn': "波克基古",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "心優しい 人の 前に 幸せを もたらすため 姿を 現すと 言われている。",
		'zh-tw': "據說牠會為了將 幸福帶給心地善良 的人而現身。",
		'zh-cn': "據說牠會為了將 幸福帶給心地善良 的人而現身。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ドレインキッス",
				'zh-tw': "吸取之吻",
				'zh-cn': "吸取之吻",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
				'zh-cn': "將這隻寶可夢恢復「30」HP。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793480,
				tcgplayer: 587626,
			},
		},
	],

	evolveFrom: {
		ja: "トゲピー",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [176],
};

export default card;
