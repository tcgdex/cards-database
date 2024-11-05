import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ラウドボーン"
	},

	illustrator: "akagi",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [911],
	hp: 180,
	types: ["Fire"],

	description: {
		ja: "優しい 歌声は 聴いた者の 魂を 癒す。 ３０００度の 炎で 敵を 焼き尽くす。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "てんねん"
		},

		effect: {
			ja: "このポケモンは、相手のポケモンが使うワザの効果を受けない。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "フレアリサイタル"
		},

		damage: "60＋",

		effect: {
			ja: "おたがいのベンチポケモンの数×20ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card