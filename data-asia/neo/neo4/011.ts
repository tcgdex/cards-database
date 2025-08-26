import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークアリアドス",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [168],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "絡み合っています",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合は、それらの1つを選択し、防御ポケモンで切り替えてから、コインをひっくり返します。頭の場合、新しい防御ポケモンが麻痺しています。",
			},
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "毒バインド",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターンの終わりまで退却できず、攻撃、ポケモンパワー、またはトレーナーカードの効果がそのプレーヤーのアクティブなポケモンを変更する場合、その効果の一部は何もしません。",
			},
			damage: 30,
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
