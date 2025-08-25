import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Flareon V",
		fr: "Pyroli V",
		es: "Flareon V",
		it: "Flareon V",
		pt: "Flareon V",
		de: "Flamara V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			en: "Flaming Breath",
			fr: "Souffle de Flamme",
			es: "Aliento Flamígero",
			it: "Soffio Ardente",
			pt: "Flaming Breath",
			de: "Flammender Atem"
		},

		effect: {
			en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie Fire, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Energía Fire y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			de: "Durchsuche dein Deck nach 1 Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Scorching Column",
			fr: "Colonne Torride",
			es: "Columna Abrasadora",
			it: "Torre Ustionante",
			pt: "Scorching Column",
			de: "Versengende Säule"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "Your opponent's Active Pokémon is now Burned.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	dexId: [136],
	regulationMark: "E",
	suffix: "V",

	thirdParty: {
		cardmarket: 574042,
		tcgplayer: 246721
	}
}

export default card
