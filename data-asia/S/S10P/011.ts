import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ポニータ",
		'zh-tw': "小火馬",
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "草原にて 群れを成し 暮らす。 産まれたての仔に 炎のたてがみは 無く １時間ほどで 生えそろう。",
		'zh-tw': "在草原上群居生活。剛誕生的 幼崽身上沒有火焰鬃毛，而是會 在出生後一小時左右長出來。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ほのおのしっぽ",
				'zh-tw': "火之尾",
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
				cardmarket: 651070,
				tcgplayer: 569854,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [77],
};

export default card;
