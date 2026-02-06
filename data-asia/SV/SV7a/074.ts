import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		ja: "アップリュー"
	},

	illustrator: "Uninori",
	category: "Pokemon",
	dexId: [841],
	hp: 80,
	types: ["Dragon"],

	description: {
		ja: "体液で りんごを 補修する。 歴戦の 強者の りんごは 全体的に 粘土色。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "サワースピット"
		},

		damage: "20×",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×20ダメージ。"
		}
	}, {
		cost: ["Grass", "Fire"],

		name: {
			ja: "スピードひこう"
		},

		damage: 70
	}],

	retreat: 1,
	rarity: "None",

	thirdParty: {
		cardmarket: 787606
	}
}

export default card