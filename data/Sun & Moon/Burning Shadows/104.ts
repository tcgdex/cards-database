import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Porygon2",
		fr: "Porygon2",
		es: "Porygon2",
		it: "Porygon2",
		pt: "Porygon2",
		de: "Porygon2"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		233,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Porygon",
		fr: "Porygon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Calculate",
				fr: "Calcul",
				es: "Calcular",
				it: "Calcolare",
				pt: "Calcular",
				de: "Berechnen"
			},
			effect: {
				en: "Look at the top 6 cards of your deck and put them back in any order.",
				fr: "Regardez les 6 cartes du dessus de votre deck et replacez-les dans l’ordre de votre choix.",
				es: "Mira las 6 primeras cartas de tu baraja y vuelve a ponerlas en la parte superior de tu baraja en el orden que quieras.",
				it: "Guarda le prime sei carte del tuo mazzo e rimettile a posto nell’ordine che preferisci.",
				pt: "Olhe as 6 primeiras cartas do seu baralho e coloque-as de volta em qualquer ordem.",
				de: "Schau dir die obersten 6 Karten deines Decks an und lege sie in beliebiger Reihenfolge zurück auf dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Beam",
				fr: "Rayon",
				es: "Transmisión",
				it: "Raggio",
				pt: "Feixe",
				de: "Strahl"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 299505,
		tcgplayer: 138600
	}
}

export default card
