import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Cryogonal",
		fr: "Hexagel",
		es: "Cryogonal",
		it: "Cryogonal",
		pt: "Cryogonal",
		de: "Frigometri"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",
	illustrator: "Kagemaru Himeno",

	attacks: [{
		name: {
			en: "Element Chain",
			fr: "Chaîne Élémentaire",
			es: "Cadena de Elementos",
			it: "Catena di Elementi",
			pt: "Element Chain",
			de: "Elementkette"
		},

		effect: {
			en: "Look at the top 6 cards of your deck and attach any number of basic Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
			fr: "Regardez les 6 cartes du dessus de votre deck puis attachez le nombre voulu de cartes Énergie de base que vous y trouvez à vos Pokémon, comme il vous plaît. Mélangez les autres cartes avec votre deck.",
			es: "Mira las 6 primeras cartas de tu baraja y une cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			it: "Guarda le prime sei carte del tuo mazzo e assegna un numero qualsiasi di carte Energia base presenti tra esse ai tuoi Pokémon nel modo che preferisci. Poi rimischia le altre carte nel tuo mazzo.",
			pt: "Look at the top 6 cards of your deck and attach any number of basic Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
			de: "Schau dir die obersten 6 Karten deines Decks an und lege beliebig viele Basis-Energiekarten, die du dort findest, beliebig an deine Pokémon an. Mische die anderen Karten zurück in dein Deck."
		},

		cost: ["Water"]
	}, {
		name: {
			en: "Icy Snow",
			fr: "Verglas",
			es: "Nieve Helada",
			it: "Geloneve",
			pt: "Icy Snow",
			de: "Eisiger Schnee"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "They are composed of ice crystals. They capture prey with chains of ice, freezing the prey at -148 degrees Fahrenheit."
	},

	dexId: [615],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574067,
		tcgplayer: 246865
	}
}

export default card