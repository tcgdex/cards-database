import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ダークライ",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "深い 眠りに 誘う 力で 人や ポケモンに 悪夢を 見せて 自分の 縄張りから 追い出す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さいみんはどう" },
			damage: 30,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "ダークレイド" },
			damage: "80+",
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手がすでにGXワザを使っていたなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561098,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [491],
};

export default card;
