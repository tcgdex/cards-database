import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Fletchinder",
		fr: "Braisillon",
		es: "Fletchinder",
		it: "Fletchinder",
		de: "Dartignis",
		'pt-br': "Fletchinder",
		ko: "불화살빈"
	},

	illustrator: "Mina Nakai",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [662],
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Fletchling"
	},

	description: {
		en: "Fletchinder scatters embers in tall grass where bug Pokémon might be hiding and then catches them as they come leaping out.",
		fr: "Il disperse des étincelles dans les hautes herbes\nqui pourraient abriter des Pokémon Insecte\net attrape ceux qui en sortent pour s'enfuir.",
		es: "Lanza chispas en zonas de hierba alta donde podrían habitar\nPokémon de tipo Bicho y, en cuanto intentan escapar, los atrapa.",
		it: "Sparge scintille nell'erba alta tra cui pensa\nsiano nascosti dei Pokémon Coleottero e,\nnon appena saltano fuori, li acchiappa.",
		de: "Es versprüht Funken in hohem Gras, in dem es\nKäfer-Pokémon vermutet, und schnappt sich diese,\nsobald sie daraus hervorhuschen.",
		'pt-br': "Fletchinder espalha brasas em gramas altas onde\nPokémon inseto podem estar se escondendo\npara os apanhar assim que saírem pulando.",
		ko: "벌레포켓몬이 숨어 있을 것 같은\n풀숲에 불똥을 흩뿌려서\n튀어나오는 순간 잡아챈다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Steady Firebreathing",
			fr: "Crachage de Feu Régulier",
			es: "Lanzallamas Continuo",
			it: "Soffiofuoco Mirato",
			de: "Stetiger Feuerhauch",
			'pt-br': "Hálito de Fogo Constante",
			ko: "불토하기"
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card