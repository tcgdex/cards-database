import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "シルシュルー",
		'zh-tw': "烏波",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "温厚だが 怒らせると 毒が 染みこんだ 鋭い 前歯で 咬みつき 痺れさせてくるぞ。",
		'zh-tw': "在冰冷的水中生活。 當周遭的天氣變涼時， 也會來到陸地上覓食。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひっかく",
				'zh-tw': "打水",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "どくのまえば",
				'zh-tw': "頭錘",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719856,
				tcgplayer: 587845,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [944],
};

export default card;
