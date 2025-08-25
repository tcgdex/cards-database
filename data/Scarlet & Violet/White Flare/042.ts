import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [575],
	set: Set,

	name: {
		en: "Gothorita",
		fr: "Mesmérella",
		de: "Hypnomorba",
		it: "Gothorita",
		pt: "Gothorita",
		es: "Gothorita",
		'es-mx': "Gothorita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Fortunate Eye",
			fr: "Regard Chanceux",
			de: "Flüchtiger Glücksblick",
			it: "Fortunocchio",
			pt: "Olho da Sorte",
			es: "Ojo Fortuito",
			'es-mx': "Ojo Fortuito"
		},

		effect: {
			en: "Look at the top 5 cards of your opponent's deck and put them back in any order.",
			fr: "Regardez les 5 cartes du dessus du deck de votre adversaire, puis replacez-les dans l'ordre de votre choix.",
			de: "Schau dir die obersten 5 Karten des Decks deines Gegners an und lege sie in beliebiger Reihenfolge zurück auf sein Deck.",
			it: "Guarda le prime cinque carte del mazzo del tuo avversario e rimettile a posto nell'ordine che preferisci.",
			pt: "Olhe as 5 cartas de cima do baralho do seu oponente e coloque-as de volta em qualquer ordem.",
			es: "Mira las 5 primeras cartas de la baraja de tu rival y vuelve a ponerlas en la parte superior de su baraja en el orden que quieras.",
			'es-mx': "Mira las primeras 5 cartas del mazo de tu rival y vuelve a ponerlas en la parte superior de su mazo en el orden que quieras."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
			de: "Psychoschuss",
			it: "Psicosparo",
			pt: "Tiro Psíquico",
			es: "Disparo Psi",
			'es-mx': "Psicodisparo"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835977
	}
}

export default card