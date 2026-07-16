import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "マッギョ",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "皮膚が 硬いので 相撲取りに 踏まれても 平気。 電気を 流すとき 笑い顔に なる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "トラップボルト" },
			damage: "30+",
			cost: ["Fighting"],
			effect: {
				ja: "相手のバトルポケモンの残りHPが、このポケモンの残りHPより多いなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557290,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [618],
};

export default card;
