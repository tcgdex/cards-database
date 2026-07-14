import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "コノヨザル",
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "心に 秘めた 怒りのパワーを こぶしに 込めて 叩きつけると 相手を 骨の髄から 砕く。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "くちないからだ" },
			effect: {
				ja: "このポケモンが、ワザのダメージを受けてきぜつするとき、自分はコインを1回投げる。オモテなら、このポケモンはきぜつせず、残りHPが「10」の状態で場に残る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ゴーストブロー" },
			damage: 100,
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "相手のベンチポケモン1匹に、ダメカンを5個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "normal" }],

	evolveFrom: {
		ja: "オコリザル",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [979],

	thirdParty: {
		cardmarket: 888283,
	},
};

export default card;
