import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Infernape ex",
		'fr-fr': "Simiabraz-ex",
		'es-es': "Infernape ex",
		'it-it': "Infernape-ex",
		'de-de': "Panferno-ex",
		'pt-br': "Infernape ex",
		'ko-kr': "초염몽 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [392],
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Monferno"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Flare Blitz",
			'fr-fr': "Boutefeu",
			'es-es': "Envite Ígneo",
			'it-it': "Fuococarica",
			'de-de': "Flammenblitz",
			'pt-br': "Blitz de Labaredas",
			'ko-kr': "플레어드라이브"
		},

		damage: 140,
		cost: ["Fire", "Fire"],

		effect: {
			'en-us': "Discard all {R} Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies {R} de ce Pokémon.",
			'es-es': "Descarta todas las Energías {R} de este Pokémon.",
			'it-it': "Rimuovi tutte le Energie {R} da questo Pokémon.",
			'de-de': "Lege alle {R}-Energien von diesem Pokémon ab.",
			'pt-br': "Descarte todas as Energias {R} deste Pokémon.",
			'ko-kr': "이 포켓몬에서 {R}에너지를 모두 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["palkia"]
}

export default card
