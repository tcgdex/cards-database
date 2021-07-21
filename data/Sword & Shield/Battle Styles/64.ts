import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Dottler",
		fr: "Coléodôme",
		es: "Dottler",
		it: "Dottler",
		pt: "Dottler",
		de: "Keradar"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	evolveFrom: {
		en: "Blipbug",
		fr: "Larvadar"
	},

	attacks: [{
		name: {
			en: "Radar",
			fr: "Radar",
			es: "Radar",
			it: "Radar",
			pt: "Radar",
			de: "Radar"
		},

		effect: {
			en: "Look at the top 4 cards of your deck and put them back in any order.",
			fr: "Regardez les 4 cartes du dessus de votre deck, puis replacez-les dans l’ordre de votre choix.",
			es: "Mira las 4 primeras cartas de tu baraja y vuelve a ponerlas en la parte superior de tu baraja en el orden que quieras.",
			it: "Guarda le prime quattro carte del tuo mazzo e rimettile a posto nell’ordine che preferisci.",
			pt: "Olhe as 4 cartas de cima do seu baralho e coloque-as de volta em qualquer ordem.",
			de: "Schau dir die obersten 4 Karten deines Decks an und lege sie in beliebiger Reihenfolge zurück auf dein Deck."
		},

		cost: ["Psychic"]
	}, {
		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card