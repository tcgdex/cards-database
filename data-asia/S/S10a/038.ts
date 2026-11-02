import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "グライガー",
		'zh-tw': "天蠍",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "顔面 めがけて 飛んでくる。 張りつかれた 獲物が 驚く あいだに 毒針を 刺しこむ。",
		'zh-tw': "會朝著獵物迎面飛來，然後趁著被纏上的獵物 驚慌失措時刺入毒針。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "せんぷうバサミ",
				'zh-tw': "旋風鉗",
			},
			damage: "10×",
			cost: ["Fighting"],
			effect: {
				ja: "コインを4回投げ、オモテの数×10ダメージ。",
				'zh-tw': "擲4次硬幣，造成正面出現的次數×10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656347,
				tcgplayer: 570701,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577116,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [207],
};

export default card;
