import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "スリーパー"
	},

	illustrator: "Mousho",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [97],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "相手と 目が 合ったときに 催眠術など 数々の 超能力を 使うという。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "でたとこさいみん"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンをねむりにする。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "ちょうねんりき"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2
}

export default card