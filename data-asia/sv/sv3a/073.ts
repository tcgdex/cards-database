import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ギルガルド"
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	dexId: [681],
	hp: 150,
	types: ["Metal"],

	description: {
		ja: "強力な 霊力で 人や ポケモンを 操り ギルガルドに 都合の 良い 国を つくらせた。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "しんぴのたて"
		},

		effect: {
			ja: "このポケモンは、相手の「ポケモンex・V」からワザのダメージを受けない。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "ハードバッシュ"
		},

		damage: 120,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 3
}

export default card