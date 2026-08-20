import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ギラティナ",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "常識の 通用しない この世の 裏側にあると 言われる 破れた世界に 生息する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "カオスクローラー" },
			damage: 120,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンはワザのダメージを受けない。前の自分の番に、自分のポケモンが「カオスクローラー」を使っていたなら、このワザは使えない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 899934,
				tcgplayer: 709185,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [487],
};

export default card;
