import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "雲より はるか上の オゾン層に 生息しているため 地上から 姿を 見ることは できない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アサルトブレイク" },
			damage: "20+",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "この番に、このポケモンがベンチからバトル場に出ていたなら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "ドラゴンクロー" },
			damage: 130,
			cost: ["Fire", "Lightning", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861370,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861728,
			},
		},
		{
			type: "reverse",
			foil: "friendball",
			thirdParty: {
				cardmarket: 861729,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [384],
};

export default card;
