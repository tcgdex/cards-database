import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Torracat",
		fr: "Matoufeu",
		es: "Torracat",
		it: "Torracat",
		de: "Miezunder",
		'pt-br': "Torracat",
		ko: "냐오히트"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Litten"
	},

	description: {
		en: "Torracat will let its Trainer coddle it once they've grown close, but it's a powerful, sharp-clawed Pokémon, so its Trainer gets covered in scratches.",
		fr: "Il faut d'abord gagner sa confiance pour pouvoir\nle câliner. Mais attention, il est puissant et ses\ngriffes acérées peuvent causer des égratignures.",
		es: "Si le coge cariño a su Entrenador, se muestra\nafectuoso, pero es tan fuerte y sus garras tan\nafiladas que lo puede dejar lleno de arañazos.",
		it: "Quando si affeziona, si lascia coccolare da chi\nlo allena, ma essendo forte e dotato di artigli\naffilati, c'è il rischio di ritrovarsi pieni di graffi.",
		de: "Zutrauliche Miezunder schmiegen sich zwar an\nihren Trainer an, da sie aber stark und ihre Krallen\nscharf sind, erleidet dieser überall Kratzwunden.",
		'pt-br': "Torracat deixa seu Treinador abraçá-lo quando a amizade\nentre eles se torna mais forte, mas, por ser um Pokémon\nforte e de garras afiadas, o Treinador ficará arranhado.",
		ko: "친해지면 트레이너에게도 응석 부리지만,\n힘은 강하고 발톱도 날카롭다.\n온몸을 상처투성이로 만든다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heat Tackle",
			fr: "Charge Énergétique",
			es: "Placaje Ardiente",
			it: "Calorazione",
			de: "Hitze-Tackle",
			'pt-br': "Golpe de Colisão Aquecido",
			ko: "히트태클"
		},

		damage: 40,
		cost: ["Fire"],

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			ko: "이 포켓몬에게도 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card