import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "リーフィア"
	},

	illustrator: "Kuroimori",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [470],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "若い リーフィアほど ツンとくる 青臭い 匂い。 年老いると 落ち葉のような 匂いになる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "わかばのめぐみ"
		},

		effect: {
			ja: "自分の手札から「基本エネルギー」を1枚選び、ベンチポケモンにつける。その後、つけたポケモンのHPをすべて回復する。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "ソーラービーム"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card