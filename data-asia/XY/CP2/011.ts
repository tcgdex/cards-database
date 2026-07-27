import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ソーナンス",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "真っ黒な 尻尾を 隠すため 暗闇で ひっそりと 生きている。 自分からは 攻撃しない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ミラーバリア" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "ころがりタックル" },
			damage: 50,
			cost: ["Psychic", "Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563492,
				tcgplayer: 605353,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [202],
};

export default card;
