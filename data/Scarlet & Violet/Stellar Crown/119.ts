import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Bouffalant",
		fr: "Frison",
		es: "Bouffalant",
		it: "Bouffalant",
		pt: "Bouffalant",
		de: "Bisofank"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Curly Wall",
			fr: "Mur Frisé",
			es: "Muro Rizo",
			it: "Muroriccio",
			pt: "Parede Crespa",
			de: "Zottelwand"
		},

		effect: {
			en: "As long as you have at least 1 other Bouffalant in play, all of your Basic {C} Pokémon take 60 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). The effect of Curly Wall doesn't stack.",
			fr: "Tant que vous avez au moins un autre Frison en jeu, tous vos Pokémon {C} de base subissent 60 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance). L'effet de Mur Frisé n'est pas cumulable.",
			es: "Mientras tengas por lo menos a otro Bouffalant en juego, los ataques de los Pokémon de tu rival hacen 60 puntos de daño menos a todos tus Pokémon {C} Básicos (después de aplicar Debilidad y Resistencia). El efecto de Muro Rizo no se acumula.",
			it: "Fintanto che hai almeno un altro Bouffalant in gioco, i tuoi Pokémon Base {C} subiscono 60 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza. L'effetto di Muroriccio non è cumulabile.",
			pt: "Enquanto você tiver pelo menos 1 outro Bouffalant em jogo, todos os seus Pokémon {C} Básicos receberão 60 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência). O efeito de Parede Crespa não acumula.",
			de: "Solange du mindestens 1 anderes Bisofank im Spiel hast, werden allen deinen Basis-{C}-Pokémon durch Attacken von Pokémon deines Gegners 60 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). Der Effekt von Zottelwand stapelt sich nicht."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Boundless Power",
			fr: "Puissance Illimitée",
			es: "Poder Ilimitado",
			it: "Potere Incontenibile",
			pt: "Poder Ilimitado",
			de: "Unbegrenzte Kraft"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "GOSSAN"
}

export default card
