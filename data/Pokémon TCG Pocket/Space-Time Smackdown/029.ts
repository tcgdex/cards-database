import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Infernape ex",
		fr: "Simiabraz-ex",
		es: "Infernape ex",
		it: "Infernape-ex",
		de: "Panferno-ex",
		'pt-br': "Infernape ex",
		ko: "초염몽 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		en: "Monferno"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Flare Blitz",
			fr: "Boutefeu",
			es: "Envite Ígneo",
			it: "Fuococarica",
			de: "Flammenblitz",
			'pt-br': "Blitz de Labaredas",
			ko: "플레어드라이브"
		},

		damage: 140,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Discard all {R} Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies {R} de ce Pokémon.",
			es: "Descarta todas las Energías {R} de este Pokémon.",
			it: "Rimuovi tutte le Energie {R} da questo Pokémon.",
			de: "Lege alle {R}-Energien von diesem Pokémon ab.",
			'pt-br': "Descarte todas as Energias {R} deste Pokémon.",
			ko: "이 포켓몬에서 {R}에너지를 모두 트래쉬한다."
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
