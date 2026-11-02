import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "エーフィ",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "全身の 細やかな 体毛で 空気の 流れを 感じて 敵の 考えや 天候を 予測する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ミラクルシャイン" },
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手の進化しているポケモン全員の上から、それぞれ「進化カード」を1枚ずつはがして退化させる。はがしたカードは、相手の手札にもどす。",
			},
		},
		{
			name: { ja: "ちょうねんりき" },
			damage: 90,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908236,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [196],
};

export default card;
