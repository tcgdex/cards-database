import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [575],
	set: Set,

	name: {
		'en-us': "Gothorita",
		'fr-fr': "Mesmérella",
		'de-de': "Hypnomorba",
		'it-it': "Gothorita",
		'pt-br': "Gothorita",
		'es-es': "Gothorita",
		'es-mx': "Gothorita"
	},

	illustrator: "Terada Tera",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Gothita",
		'fr-fr': "Scrutella",
		'de-de': "Mollimorba",
		'it-it': "Gothita",
		'pt-br': "Gothita",
		'es-es': "Gothita",
		'es-mx': "Gothita"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Fortunate Eye",
			'fr-fr': "Regard Chanceux",
			'de-de': "Flüchtiger Glücksblick",
			'it-it': "Fortunocchio",
			'pt-br': "Olho da Sorte",
			'es-es': "Ojo Fortuito",
			'es-mx': "Ojo Fortuito"
		},

		effect: {
			'en-us': "Look at the top 5 cards of your opponent's deck and put them back in any order.",
			'fr-fr': "Regardez les 5 cartes du dessus du deck de votre adversaire, puis replacez-les dans l'ordre de votre choix.",
			'de-de': "Schau dir die obersten 5 Karten des Decks deines Gegners an und lege sie in beliebiger Reihenfolge zurück auf sein Deck.",
			'it-it': "Guarda le prime cinque carte del mazzo del tuo avversario e rimettile a posto nell'ordine che preferisci.",
			'pt-br': "Olhe as 5 cartas de cima do baralho do seu oponente e coloque-as de volta em qualquer ordem.",
			'es-es': "Mira las 5 primeras cartas de la baraja de tu rival y vuelve a ponerlas en la parte superior de su baraja en el orden que quieras.",
			'es-mx': "Mira las primeras 5 cartas del mazo de tu rival y vuelve a ponerlas en la parte superior de su mazo en el orden que quieras."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy",
			'de-de': "Psychoschuss",
			'it-it': "Psicosparo",
			'pt-br': "Tiro Psíquico",
			'es-es': "Disparo Psi",
			'es-mx': "Psicodisparo"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836141,
				tcgplayer: 642237
			}
		},
	],
}

export default card
