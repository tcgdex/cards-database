import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル タチフサグマ",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	description: {
		ja: "ケンカを 繰り返し 進化。 腕をクロスし 叫ぶ 雄叫びは どんな 相手も 怯ませるぞ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "あらくれシャウト" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のポケモン1匹に、ダメカンを3個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ブロッキング" },
			damage: 90,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586945,
				tcgplayer: 571459,
			},
		},
	],

	evolveFrom: {
		ja: "ガラル マッスグマ",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Character Rare",
	dexId: [862],
};

export default card;
