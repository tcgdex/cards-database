import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ブーピッグ",
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "相手を 操るときの 不思議な ステップは 昔 外国で 大流行したことが ある。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エナジーステップ" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を上から4枚見て、その中から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ねんどうだん" },
			damage: 60,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863608,
			},
		},
	],

	evolveFrom: {
		ja: "バネブー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [326],
};

export default card;
