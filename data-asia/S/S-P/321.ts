import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "レジドラゴV",
	},

	illustrator: "PLANETA Hiiragi",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "てんのさけび" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を上から3枚トラッシュし、その中にあるエネルギーをすべて、このポケモンにつける。",
			},
		},
		{
			name: { ja: "ドラゴンレーザー" },
			damage: 130,
			cost: ["Grass", "Grass", "Fire"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 681791,
				tcgplayer: 597494,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [895],
};

export default card;
