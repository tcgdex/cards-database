import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ルナトーン",
	},

	illustrator: "Hisao Nakamura",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "４０年前に 隕石の 落ちた 場所で 初めて 見つかった。 にらむ だけで 敵を 眠らせる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ソルシェイダー" },
			effect: {
				ja: "自分の場に「ソルロック」がいるなら、おたがいの場の[炎]ポケモン（「ポケモンGX・EX」をのぞく）の特性は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ねんりき" },
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559178,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [337],
};

export default card;
