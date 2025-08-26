import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いvileplume",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [45],
	hp: 60,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "花粉症",
			},
			effect: {
				ja: "トレーナーカードを再生できません。このパワーは、暗いvileplumeが眠っている、混乱し、麻痺している間に機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "花びらの旋風",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。 2つ以上の頭を手に入れると、ダークビレプルームが混乱しています（ダメージを受けた後）。",
			},
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
