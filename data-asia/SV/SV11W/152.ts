import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ミルホッグ",
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "ほほ袋に ためた 木の実の タネを 飛ばして 攻撃。 敵を 発見すると 尻尾を 立てる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "きあいだめ" },
			cost: ["Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンの「ひっさつまえば」のダメージは「240」になる。",
			},
		},
		{
			name: { ja: "ひっさつまえば" },
			damage: 80,
			cost: ["Colorless"],
			effect: { ja: "コインを1回投げウラなら、このワザは失敗。" },
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		ja: "ミネズミ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [505],
	thirdParty: {
		cardmarket: 829511,
		tcgplayer: 636705,
	},
};

export default card;
