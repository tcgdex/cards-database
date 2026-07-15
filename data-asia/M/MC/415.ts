import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ガチグマ アカツキ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "鉄のように 硬い 泥で 身を 守り 闇を 見通す 左目を 持つ 特別な ガチグマ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "けいけんそく" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札から「基本[F]エネルギー」を2枚まで選び、このポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マッドバイト" },
			damage: "100+",
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863717,
			},
		},
	],

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [901],
};

export default card;
