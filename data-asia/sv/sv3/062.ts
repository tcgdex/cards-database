import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ルガルガン"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [745],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "岩の たてがみで 近づくものを 切りつける。 トレーナーの 指示も 気に入らなければ 従わない。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "とどめのキバ"
		},

		damage: 90,

		effect: {
			ja: "相手のバトルポケモンにダメカンがのっていないなら、このワザは失敗。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "スラッシュクロー"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card