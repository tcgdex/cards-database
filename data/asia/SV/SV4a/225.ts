import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ウェルカモ",
		'zh-tw': "湧躍鴨",
		'id-id': "Quaxwell"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	dexId: [913],
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "ひたすらに 浅瀬を 走り込んで 足腰を 鍛え 仲間同士で 足技の 華麗さを 競いあう。",
		'zh-tw': "會在淺灘不斷跑步來鍛鍊下盤的筋骨，好跟夥伴們 競爭誰的腿技最為華麗。",
		'id-id': "Quaxwell melatih kaki dan pinggangnya dengan terus berlari di perairan dangkal. Pokémon ini saling mengadu keindahan teknik serangan kaki dengan sesamanya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "みずでっぽう",
			'zh-tw': "水槍",
			'id-id': "Pistol Air"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "スプラッシュ",
			'zh-tw': "飛濺",
			'id-id': "Splash"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747579,
				tcgplayer: 567626,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card