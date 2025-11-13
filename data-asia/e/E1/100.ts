import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "vileplume",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [45],
	hp: 90,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "毒花粉",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）、コインをひっくり返すことができます。頭の場合、防御ポケモンは現在毒されています。 vileplumeが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "花びらのダンス",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。 vileplumeは混乱しています。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
