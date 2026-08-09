import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ザマゼンタ",
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "いかなる 攻撃も 弾き返す 姿は 格闘王の盾 と 呼ばれ 恐れ 崇められた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ストロングバッシュ" },
			damage: 70,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、受けたダメージぶんのダメカンを、ワザを使ったポケモンにのせる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821939,
				tcgplayer: 629048,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [889],
};

export default card;
