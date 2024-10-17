import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "トリトドン"
	},

	illustrator: "Scav",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [423],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "浅い 磯辺に 現れる。 獲物を 捕らえると 粘液で ゆっくりと 溶かし すするのだ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ねんちゃくしばり"
		},

		effect: {
			ja: "このポケモンがベンチにいるかぎり、おたがいのベンチの2進化ポケモンの特性は、すべてなくなる。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "マッドショット"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card