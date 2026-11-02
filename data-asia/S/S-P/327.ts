import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "アーケオス",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "飛び立つために 助走する。 その 距離は およそ ４キロ。 走る速さは 時速４０キロ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "プライマルターボ" },
			effect: {
				ja: "自分の番に1回使える。自分の山札から特殊エネルギーを2枚まで選び、自分のポケモン1匹につける。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スピードウイング" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 675889,
				tcgplayer: 597500,
			},
		},
	],

	evolveFrom: {
		ja: "アーケン",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [567],
};

export default card;
