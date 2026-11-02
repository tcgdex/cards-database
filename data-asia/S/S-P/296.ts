import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "カイオーガV",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "デュアルスプラッシュ" },
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン2匹に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "アクアタイフーン" },
			damage: 210,
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「アクアタイフーン」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 666785,
				tcgplayer: 597469,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [382],
};

export default card;
