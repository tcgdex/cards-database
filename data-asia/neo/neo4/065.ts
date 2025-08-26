import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "未作たx",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [201],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "xxxxx [xxxxx]",
			},
			effect: {
				ja: "名前が付けられていないPokmonが隠されたパワー攻撃を使用しているときはいつでも、尾をつけるまでコインをひっくり返します。その攻撃は、各ヘッドに対してさらに10回のダメージを与えます。再生されていない[x]が複数ある場合は、各ターンを1 [xxxxx]のみを使用します。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "隠された力",
			},
			damage: 10,
		},
	],

	retreat: 1,

};

export default card
