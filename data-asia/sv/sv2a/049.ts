import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "モルフォン"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [49],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "翅に りんぷんが ついていて ヒラヒラと 羽ばたくたびに 猛毒の粉を ばらまく。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "さくらんパウダー"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。次の相手の番、相手は手札からグッズを出して使えない。"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "スピードウイング"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card