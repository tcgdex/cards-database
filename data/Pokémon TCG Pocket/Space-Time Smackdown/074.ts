import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Drifblim",
		fr: "Grodrive",
		es: "Drifblim",
		it: "Drifblim",
		de: "Drifzepeli",
		'pt-br': "Drifblim",
		ko: "둥실라이드"
	},

	illustrator: "Miki Tanaka",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Drifloon"
	},

	description: {
		en: "Some say this Pokémon is a collection of souls burdened with regrets, silently drifting through the dusk.",
		fr: "Ce Pokémon, qui flotte silencieusement au crépuscule,\nserait né des âmes des défunts rongés par les regrets.",
		es: "Se dice que está formado por almas en pena.\nAl caer la noche, flota a la deriva en silencio sepulcral.",
		it: "Si dice che sia formato dall'aggregazione\ndi anime che hanno lasciato la vita con dei\nrimpianti. Fluttua silenzioso all'imbrunire.",
		de: "Man sagt, es bestehe aus den Seelen derer,\ndie voller Groll verstorben sind. Es treibt lautlos\nim Zwielicht dahin.",
		'pt-br': "Dizem que este Pokémon é um conjunto de almas cheias\nde arrependimentos, flutuando silenciosamente\nao anoitecer.",
		ko: "억울하게 죽은 영혼이\n모인 모습으로도 일컬어진다.\n땅거미가 질 무렵 소리 없이 떠돈다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Balloon Strike",
			fr: "Coup de Ballon",
			es: "Golpe Globo",
			it: "Palloncolpo",
			de: "Ballonhieb",
			'pt-br': "Golpe Balão",
			ko: "벌룬어택"
		},

		damage: 60,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
