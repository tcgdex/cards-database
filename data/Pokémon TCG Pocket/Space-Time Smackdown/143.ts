import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Regigigas",
		fr: "Regigigas",
		es: "Regigigas",
		it: "Regigigas",
		de: "Regigigas",
		'pt-br': "Regigigas",
		ko: "레지기가스"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		en: "It is said to have made Pokémon that look like itself from a special ice mountain, rocks, and magma.",
		fr: "On dit qu'il a créé des Pokémon à son image\nà partir de glace, de roche et de magma.",
		es: "Se dice que usó rocas, magma y un hielo especial\nde montaña para crear Pokémon con su aspecto.",
		it: "Si dice che abbia creato dei Pokémon simili a sé\nusando una montagna ghiacciata, rocce e magma.",
		de: "Man sagt, es habe Pokémon aus einem Eisberg,\nFelsen und Magma nach seinem Abbild geschaffen.",
		'pt-br': "Diz-se que criaram Pokémon parecidos com eles mesmos\nde uma montanha de gelo especial, rochas e magma.",
		ko: "특수한 빙산이나 암석,\n마그마에서 자신의 모습과 닮은\n포켓몬을 만들었다고 전해진다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Raging Hammer",
			fr: "Marteau Rageur",
			es: "Martillo Furioso",
			it: "Martelfuria",
			de: "Wuthammer",
			'pt-br': "Martelo Feroz",
			ko: "레이징해머"
		},

		damage: "50+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does more damage equal to the damage this Pokémon has on it.",
			fr: "Cette attaque inflige des dégâts supplémentaires égaux à ceux que ce Pokémon a déjà subis.",
			es: "Este ataque hace una cantidad de daño adicional igual al daño que ya tenga este Pokémon.",
			it: "Questo attacco infligge danni aggiuntivi pari alla quantità di danni subiti al momento da questo Pokémon.",
			de: "Diese Attacke fügt zusätzlichen Schaden in Höhe des Schadens zu, der diesem Pokémon bereits zugefügt wurde.",
			'pt-br': "Este ataque causa dano a mais, equivalente ao dano que este Pokémon tiver nele.",
			ko: "이 포켓몬이 받고 있는 데미지만큼 데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["dialga", "palkia"]
}

export default card
