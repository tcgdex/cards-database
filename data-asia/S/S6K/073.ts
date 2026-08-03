import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼラオラV",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "クロスフィスト" },
			damage: 100,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "前の自分の番、このポケモン以外の「れんげき」のポケモンがワザを使っていたなら、相手のベンチポケモン1匹にも、160ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560974,
				tcgplayer: 569301,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [807],
};

export default card;
