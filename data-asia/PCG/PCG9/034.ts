import { Card } from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		ja: "Typhlosion（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [157],
	hp: 100,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "日陰の動き",
			},
			effect: {
				ja: "ターン中（攻撃の前に）、TyphlosionがアクティブなPokã©Monである場合、いずれかのプレイヤーのPokã©Monから別のPokã©Mon（あなたまたは相手）に1ダメージカウンターを移動できます。害虫が特別な状態の影響を受ける場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				ja: "燃えるボール",
			},
			effect: {
				ja: "Typhlosionに少なくとも2つの火エネルギーが付着している場合、防御ポケモンが燃やされています。",
			},
			damage: 60,
		},
	],

	retreat: 1,

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
