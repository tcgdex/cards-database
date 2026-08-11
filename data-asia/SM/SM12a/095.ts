import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラキュウコンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Fairy"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふしぎなみちびき" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札にあるグッズを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "はくぎんのかぜ" },
			damage: 70,
			cost: ["Fairy", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "サブリメイションGX" },
			cost: ["Fairy", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ウルトラビースト」なら、そのポケモンをきぜつさせる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544101,
			},
		},
	],

	evolveFrom: {
		ja: "アローラロコン",
	},

	retreat: 2,
	regulationMark: "B",
	rarity: "Double rare",
	dexId: [38],

	suffix: "GX",
};

export default card;
