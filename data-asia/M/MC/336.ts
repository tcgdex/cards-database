import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オドリドリ",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "うすもものミツを 吸った 姿。 緩やかな ステップで 精神を 高め サイコパワーを 放つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エネアシスト" },
			cost: ["Psychic"],
			effect: {
				ja: "自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモン1匹につける。",
			},
		},
		{
			name: { ja: "げんわくダンス" },
			damage: 20,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863638,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [741],
};

export default card;
