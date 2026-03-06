import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Registeel ex",
		fr: "Registeel-ex",
		es: "Registeel ex",
		'es-mx': "Registeel ex",
		de: "Registeel-ex",
		it: "Registeel-ex",
		pt: "Registeel ex"
	},

	illustrator: "toriyufu",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],
	stage: "Basic",
	dexId: [379],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Regi Charge",
			fr: "Regi-Charge",
			es: "Regi Carga",
			'es-mx': "Regicarga",
			de: "Regi-Ladung",
			it: "Carica Regi",
			pt: "Carga Regi"
		},

		effect: {
			en: "Attach up to 2 Basic {M} Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie {M} de base de votre pile de défausse à ce Pokémon.",
			es: "Une hasta 2 cartas de Energía {M} Básica de tu pila de descartes a este Pokémon.",
			'es-mx': "Une hasta 2 cartas de Energía {M} Básica de tu pila de descartes a este Pokémon.",
			de: "Lege bis zu 2 Basis-{M}-Energiekarten aus deinem Ablagestapel an dieses Pokémon an.",
			it: "Assegna a questo Pokémon fino a due carte Energia base {M} dalla tua pila degli scarti.",
			pt: "Ligue até 2 cartas de Energia {M} Básica da sua pilha de descarte a este Pokémon."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Protecting Steel",
			fr: "Acier Protecteur",
			es: "Acero Protector",
			'es-mx': "Acero Protector",
			de: "Schützender Stahl",
			it: "Acciaio Protettivo",
			pt: "Protegidaço"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 50 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 50 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675957,
		cardmarket: 869756
	}
}

export default card