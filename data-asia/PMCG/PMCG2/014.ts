import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "vileplume",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [45],
	hp: 80,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "癒す",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、ポクモンの1つから1つのダメージカウンターを取り外します。 vileplumeが眠っている、混乱し、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "花びらのダンス",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。 vileplumeは現在混乱しています（ダメージを受けた後）。",
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
