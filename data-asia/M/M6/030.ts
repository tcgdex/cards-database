import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "スリーパー",
	},

	illustrator: "Yuta Kawazu",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "どんなときでも 持っている 振り子を 決まったリズムで 揺らしている。 近寄ると なぜか 眠くなる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "マインドルーラー" },
			damage: "20×",
			cost: ["Psychic"],
			effect: {
				ja: "相手の手札の枚数×20ダメージ。",
			},
		},
		{
			name: { ja: "さいみんはどう" },
			damage: 50,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899933,
				tcgplayer: 709184,
			},
		},
	],

	evolveFrom: {
		ja: "スリープ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [97],
};

export default card;
