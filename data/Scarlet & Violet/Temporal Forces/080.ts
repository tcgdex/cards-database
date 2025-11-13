import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [1006],
	set: Set,

	name: {
		en: "Iron Valiant",
		fr: "Garde-de-Fer",
		es: "Ferropaladín",
		it: "Eroeferreo",
		pt: "Valentia Férrea",
		de: "Eisenkrieger"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Calculation",
			fr: "Calcul Simple",
			es: "Cómputo",
			it: "Calcolo",
			pt: "Cálculo",
			de: "Kalkulation"
		},

		effect: {
			en: "Look at the top 4 cards of your deck and put them back in any order.",
			fr: "Regardez les 4 cartes du dessus de votre deck, puis replacez-les dans l'ordre de votre choix.",
			es: "Mira las 4 primeras cartas de tu baraja y vuelve a ponerlas en la parte superior de tu baraja en el orden que quieras.",
			it: "Guarda le prime quattro carte del tuo mazzo e rimettile a posto nell'ordine che preferisci.",
			pt: "Olhe as 4 cartas de cima do seu baralho e coloque-as de volta em qualquer ordem.",
			de: "Schau dir die obersten 4 Karten deines Decks an und lege sie in beliebiger Reihenfolge zurück auf dein Deck."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Majestic Sword",
			fr: "Épée Majestueuse",
			es: "Espada Majestuosa",
			it: "Spada Grandiosa",
			pt: "Espada Majestosa",
			de: "Majestätisches Schwert"
		},

		effect: {
			en: "If you played a Future Supporter card from your hand during this turn, this attack does 100 more damage.",
			fr: "Si vous avez joué une carte Supporter Temps futur de votre main pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si has jugado una carta de Partidario del futuro de tu mano durante este turno, este ataque hace 100 puntos de daño más.",
			it: "Se hai giocato una carta Aiuto Tempo Futuro dalla tua mano durante questo turno, questo attacco infligge 100 danni in più.",
			pt: "Se você jogou uma carta de Apoiador Futurista da sua mão durante este turno, este ataque causará 100 pontos de dano a mais.",
			de: "Wenn du eine Zukunftsunterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "chibi",

	thirdParty: {
		cardmarket: 760710
	}
}

export default card
