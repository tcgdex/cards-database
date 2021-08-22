import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Gothita",
		fr: "Scrutella",
		es: "Gothita",
		it: "Gothita",
		pt: "Gothita",
		de: "Mollimorba"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Fortunate Eye",
				fr: "Regard Chanceux",
				es: "Ojo Fortuito",
				it: "Fortunocchio",
				pt: "Olho da Sorte",
				de: "Flüchtiger Glücksblick"
			},
			effect: {
				en: "Look at the top 5 cards of your opponent’s deck and put them back in any order.",
				fr: "Regardez les 5 cartes du dessus du deck de votre adversaire, puis replacez-les dans l’ordre de votre choix.",
				es: "Mira las 5 primeras cartas de la baraja de tu rival y vuelve a ponerlas en la parte superior de su baraja en el orden que quieras.",
				it: "Guarda le prime cinque carte del mazzo del tuo avversario e rimettile a posto nell’ordine che preferisci.",
				pt: "Olhe as 5 cartas de cima do baralho do seu oponente e coloque-as de volta em qualquer ordem.",
				de: "Schau dir die obersten 5 Karten des Decks deines Gegners an und lege sie in beliebiger Reihenfolge zurück auf sein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Gentle Slap",
				fr: "Gifle Douce",
				es: "Bofetada Gentil",
				it: "Schiaffetto",
				pt: "Tapinha",
				de: "Sanfter Hieb"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Though they’re still only babies, there’s psychic power stored in their ribbonlike feelers, and sometimes they use that power to fight."
	}
}

export default card
