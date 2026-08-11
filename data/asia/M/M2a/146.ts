import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Nのポイントアップ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュから基本エネルギーを1枚選び、ベンチの「Nのポケモン」につける。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861389,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "None",
};

export default card;
