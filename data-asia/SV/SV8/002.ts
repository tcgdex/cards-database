import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ナッシー"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [103],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "ごくまれに 頭の どれか ひとつが 地面に 落ちると タマタマになって 動きだすという。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "たまなげアワー"
		},

		damage: "60×",

		effect: {
			ja: "おたがいのバトルポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×60ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card