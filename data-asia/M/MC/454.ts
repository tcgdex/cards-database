import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アブソル",
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "風のように 野山を 駆けぬける。 弓なりの ツノは 自然災害の 予兆を 敏感に 感じとる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "バッドフォール" },
			damage: "20+",
			cost: ["Colorless"],
			effect: {
				ja: "自分の場に[D]エネルギーが3個以上あるなら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863756,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [359],
};

export default card;
