import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ギラティナ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "暴れ者 ゆえ 追い出されたが 破れた世界と 言われる 場所で 静かに 元の世界を 見ていた。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "やぶれたとびら" },
			effect: {
				ja: "このカードがトラッシュにあるなら、自分の番に1回使える。このカードをベンチに出す。その後、相手のベンチポケモン2匹に、それぞれダメカンを1個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "シャドーインパクト" },
			damage: 130,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "自分のポケモン1匹に、ダメカンを4個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543826,
			},
		},
	],

	retreat: 3,
	regulationMark: "B",
	rarity: "None",
	dexId: [487],
};

export default card;
