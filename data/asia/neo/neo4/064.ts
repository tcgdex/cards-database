import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "w",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [201],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "欲しい[欲しい]",
			},
			effect: {
				ja: "ターン中に（攻撃の前）</em> </em>、[W]、w]、[a]、[n]、および[t]がベンチにある場合、コインをひっくり返すことができます。頭の場合は、廃棄の山からトレーナーカードを手に入れてください。",
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
