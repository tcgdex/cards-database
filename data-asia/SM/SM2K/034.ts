import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ダイノーズ",
	},

	illustrator: "Yoshinobu Saito",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "強い 磁力を 放っているので 近くにある 電化製品は 使いものに ならなくなってしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "エナジーコネクター" },
			damage: 30,
			cost: ["Metal"],
			effect: {
				ja: "自分のトラッシュにあるエネルギーを1枚、このポケモンにつける。",
			},
		},
		{
			name: { ja: "パワージェム" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561500,
			},
		},
	],

	evolveFrom: {
		ja: "ノズパス",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [476],
};

export default card;
