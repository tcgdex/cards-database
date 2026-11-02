import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジバコイルV",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっぱりじりょく" },
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに40ダメージ。",
			},
		},
		{
			name: { ja: "スプリットビーム" },
			damage: 90,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン2匹にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657058,
				tcgplayer: 570742,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [462],
};

export default card;
