import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゾロアーク",
		id: "Zoroark",
		th: "โซโรอาร์ค",
		'zh-tw': "索羅亞克",
		'zh-cn': "索羅亞克"
	},

	illustrator: "nagimiso",
	rarity: "None",
	category: "Pokemon",
	dexId: [571],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "いっぺんに 大勢の 人を 化かす 力を 持つ。 幻の 景色を 見せて 棲み処を 守る。",
		id: "Zoroark memiliki kekuatan untuk mengelabui orang banyak secara bersamaan. Pokémon ini memperlihatkan pemandangan ilusi untuk melindungi sarangnya.",
		th: "มีพลังที่สามารถหลอกคนจำนวนมากได้พร้อม ๆ กัน จะสร้างภาพลวงตาขึ้นมาเพื่อปกป้องรัง",
		'zh-tw': "有著一口氣迷惑許多人的力量。 會讓人看見虛幻的景色， 以保護自己的居所。",
		'zh-cn': "有著一口氣迷惑許多人的力量。 會讓人看見虛幻的景色， 以保護自己的居所。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "げんえいジャック",
			id: "Pembajakan Fantom",
			th: "โจรกรรมลวงตา",
			'zh-tw': "幻影劫持",
			'zh-cn': "幻影劫持"
		},

		damage: "60×",

		effect: {
			ja: "相手の場の「ポケモンex・V」の数×60ダメージ。",
			id: "Serangan ini memberikan kerusakan sejumlah 60 untuk tiap Pokémon {ex}/{V} di Arena lawan.",
			th: "แดเมจจะเท่ากับจำนวน[โปเกมอน【ex】 /【V】] บนกระดานฝ่ายตรงข้าม x60",
			'zh-tw': "造成對手的場上的「寶可夢【ex】・【V】」的數量×60點傷害。",
			'zh-cn': "造成對手的場上的「寶可夢【ex】・【V】」的數量×60點傷害。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ツメできりさく",
			id: "Cakar Penyayat",
			th: "กรงเล็บฉีกร่าง",
			'zh-tw': "利爪劈擊",
			'zh-cn': "利爪劈擊"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card