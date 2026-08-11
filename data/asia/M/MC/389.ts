import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドテッコツ",
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'ja-jp': "鍛え上げられた 筋肉の 体は プロレスラーが 束に なって 攻撃しても びくとも しない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "けたぐり" },
			damage: 30,
			cost: ["Fighting"],
		},
		{
			name: { ja: "アームハンマー" },
			damage: 60,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手の山札を上から1枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863691,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドッコラー",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [533],
};

export default card;
