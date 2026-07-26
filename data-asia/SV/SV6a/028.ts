import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルバット",
		'zh-tw': "大嘴蝠",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "生き物の 血液が 好物。 腹ペコの 仲間に 吸った 血を 分け与えることも あるという。",
		'zh-tw': "喜歡吸食生物的血液。 據說還會將吸來的血 分給空腹的夥伴。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "スピードひこう",
				'zh-tw': "高速飛行",
			},
			damage: 30,
			cost: ["Darkness"],
		},
		{
			name: {
				ja: "しっこくのやいば",
				'zh-tw': "漆黑利刃",
			},
			damage: 80,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773777,
				tcgplayer: 566279,
			},
		},
	],

	evolveFrom: {
		ja: "ズバット",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [42],
};

export default card;
