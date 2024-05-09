import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カブトプス"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [141],
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "絶滅の 理由は 不明。 暖かい 海に 暮らしていた 凶暴な 古代のポケモン。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "たいこのことわり"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のバトルポケモンの弱点は「×4」としてダメージ計算をする。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ドレインスラッシュ"
		},

		damage: 100,

		effect: {
			ja: "このポケモンのHPを「30」回復する。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card