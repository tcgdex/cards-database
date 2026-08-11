import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジバコイルVSTAR",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 270,
	types: ["Lightning"],

	stage: "VSTAR",

	attacks: [
		{
			name: { ja: "マグネグリップ" },
			damage: 180,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "自分の山札からグッズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "エレクトロスター" },
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "相手のベンチポケモン2匹に、それぞれ90ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657069,
				tcgplayer: 570753,
			},
		},
	],

	evolveFrom: {
		ja: "ジバコイルV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Holo Rare",
	dexId: [462],
};

export default card;
