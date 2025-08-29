import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークジェンガー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [94],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "深い眠り",
			},
			effect: {
				ja: "ダークジェンガーがプレイしている限り、プレーヤーは各ターンの終わりに眠っているポクモンのそれぞれに2コインをひっくり返します。どちらかが尾の場合、そのポクモンはまだ眠っています。ダークジェンガーが眠っている、混乱し、麻痺している間、このパワーは機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: {
				ja: "引き込みます",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合、それらの1つを選択して、防御ポケモンに切り替えることができます（この攻撃の損傷またはその他の効果を行う前に）。いずれにせよ、ディフェンディングポケモンは今眠っています。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
