import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "Clefable",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [36],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "メトロノーム",
			},
			effect: {
				ja: "対戦相手のアクティブなポケモンの攻撃の1つを選択し、この攻撃として使用します。",
			},

		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "最小化します",
			},
			effect: {
				ja: "対戦相手の次のターン中、このポケモンは攻撃から20回少ないダメージを受けます（脱力感と抵抗を適用した後）。",
			},

		},
	],

	retreat: 2,

	variants : [
		{
			type: "holo",
		},
	],
};

export default card
