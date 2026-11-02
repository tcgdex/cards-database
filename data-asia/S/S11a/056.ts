import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "チルット",
		'zh-tw': "青綿鳥",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "真綿のような 翼は 空気を 含んで ふわふわの 触り心地。 こまめな 手入れを 欠かさない。",
		'zh-tw': "絲綿般的翅膀會鎖住空氣，呈現蓬蓬鬆鬆的觸感。牠總是會細心地打理翅膀。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "れんぞくスピン",
				'zh-tw': "連續旋轉",
			},
			damage: "20×",
			cost: ["Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×20ダメージ。",
				'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673054,
				tcgplayer: 570819,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570901,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [333],
};

export default card;
