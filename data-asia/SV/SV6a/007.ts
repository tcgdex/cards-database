import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "デルビル",
		'zh-tw': "戴魯比",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "仲間に 連絡するときと 獲物を 追いつめるときでは 鳴き声の 種類が 違うのだ。",
		'zh-tw': "聯絡夥伴和追趕獵物 的時候，會分別發出 不同種類的叫聲。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かじる",
				'zh-tw': "咬",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "うしろげり",
				'zh-tw': "後踢",
			},
			damage: 50,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773756,
				tcgplayer: 566258,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [228],
};

export default card;
