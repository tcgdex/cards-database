import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトツキ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "剣の 柄を 握った 人の 腕に 青い 布を 巻きつけて 倒れるまで 命を 吸い取る。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "だんまつま" },
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、相手のポケモン1匹に、ダメカン3個をのせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 50,
			cost: ["Psychic", "Psychic", "Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559577,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [679],
};

export default card;
