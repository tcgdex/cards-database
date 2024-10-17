import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ミライドン"
	},

	illustrator: "Nurikabe",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1008],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "古い 書物に 名が ある テツノオロチらしい。 雷で 大地を 灰に 変えたという。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "プロテクトコード"
		},

		damage: 40,

		effect: {
			ja: "次の相手の番、自分の「未来」のポケモン全員は、「ポケモンex」からワザのダメージを受けない。このポケモンがバトル場をはなれたら、この効果はなくなる。"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "サンダークロー"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card