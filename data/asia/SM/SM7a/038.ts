import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "ディアルガ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "時間を 操る 力を 持つ。 シンオウ地方では 神様と 呼ばれ 神話に 登場する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ときをけずる" },
			damage: 60,
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "相手の進化しているバトルポケモンから、「進化カード」を1枚はがして退化させる。はがしたカードは、相手の手札にもどす。",
			},
		},
		{
			name: { ja: "パワーブラスト" },
			damage: 130,
			cost: ["Metal", "Metal", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558926,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [483],
};

export default card;
