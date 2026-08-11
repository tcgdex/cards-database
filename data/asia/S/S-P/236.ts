import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エレズン",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'ja-jp': "毒素を 化学変化 させて 電気を 出す。 電力は 弱いが ビリビリと 痺れる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なきごえ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "プチボルト" },
			damage: 10,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597418,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [848],
};

export default card;
