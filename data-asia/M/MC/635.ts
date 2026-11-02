import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "Nのポイントアップ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから基本エネルギーを1枚選び、ベンチの「Nのポケモン」につける。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863937,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "None",
};

export default card;
