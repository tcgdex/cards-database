import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "デルビル",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "仲間だけで わかりあえる 鳴き声で お互いの 位置を 確かめながら 獲物を 追いつめる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "チームハント" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の場の「デルビル」の数ぶん、自分の山札を引く。",
			},
		},
		{
			name: { ja: "ほのお" },
			damage: 10,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558659,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [228],
};

export default card;
