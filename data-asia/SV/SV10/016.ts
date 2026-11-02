import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のデルビル",
		'zh-tw': "<火箭隊的>戴魯比",
		'zh-cn': "<火箭隊的>戴魯比",
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "様々な 鳴き声を 使い分け 仲間と コミュニケーションしながら 狩りを おこなう 賢さを持つ。",
		'zh-tw': "擁有在狩獵的時候 能使用各式各樣的叫聲 來與夥伴溝通的智慧。",
		'zh-cn': "擁有在狩獵的時候 能使用各式各樣的叫聲 來與夥伴溝通的智慧。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひをはく",
				'zh-tw': "吐火",
				'zh-cn': "吐火",
			},
			damage: 20,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821847,
				tcgplayer: 628657,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [228],
};

export default card;
