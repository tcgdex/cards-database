import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "クレセリア",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "飛行するときは ベールのような 羽から 光る 粒子を 出す。 三日月の化身と 呼ばれている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いやしのまい" },
			cost: ["Psychic"],
			effect: {
				ja: "自分のポケモン全員のHPを、それぞれ「20」回復する。",
			},
		},
		{
			name: { ja: "クレセントパージ" },
			damage: "80+",
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "のぞむなら、ウラになっている自分のサイドを1枚選び、オモテにする。その場合、80ダメージ追加。（対戦が終わるまで、そのサイドはオモテのまま。）",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863619,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [488],
};

export default card;
