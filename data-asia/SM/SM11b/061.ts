import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ムーランド",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "長く 暖かい 毛の おかげで 寒さは へっちゃら。 アローラの ムーランドは 少し 苦しそうだ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ガウガウバーク" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたときと、このポケモンがバトル場で相手のワザのダメージを受けてきぜつしたとき、それぞれ1回使える。相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かけぬける" },
			damage: 110,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555289,
			},
		},
	],

	evolveFrom: {
		ja: "ハーデリア",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Character Rare",
	dexId: [508],
};

export default card;
