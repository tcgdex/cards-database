import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "パチリス",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "溜まった 電気を 分け与えようと 頬袋を こすり合わせる パチリスを 見かけることも ある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぱちぱちチャージ" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数ぶんまで、自分のトラッシュから「基本[L]エネルギー」を選び、ベンチポケモンに好きなようにつける。",
			},
		},
		{
			name: { ja: "プチボルト" },
			damage: 30,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 754795,
				tcgplayer: 587878,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [417],
};

export default card;
