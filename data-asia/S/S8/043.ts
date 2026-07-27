import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル サニーゴ",
		'zh-tw': "伽勒爾 太陽珊瑚",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "急な 環境の 変化で 死んだ 太古の サニーゴ。 枝で 人の 生気を 吸う。",
		'zh-tw': "牠是因急遽環境變化而死去的遠古太陽珊瑚。會用珊瑚枝吸取人的精氣。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575598,
				tcgplayer: 569544,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [222],
};

export default card;
