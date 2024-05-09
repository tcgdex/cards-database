import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "シロデスナ"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [770],
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "小さな ポケモンを 砂の体に 引きずり込み 好きなときに 生気を 吸い取る 恐ろしい ポケモン。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ホロウショット"
		},

		damage: 40
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "グラウンドパワー"
		},

		damage: "80＋",

		effect: {
			ja: "場に自分のスタジアムが出ているなら、80ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 4
}

export default card