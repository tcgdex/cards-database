import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いワニ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [159],
	hp: 60,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Water"],
			name: {
				ja: "顎のクランプ",
			},
			effect: {
				ja: "防御するポケモンは、相手の次のターン中に退却することはできません。防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。 （いずれかのポケモンがこの効果を終了するかのいずれかのベンチを作成します。）",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
