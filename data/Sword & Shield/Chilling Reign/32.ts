import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [225],
	set: Set,

	name: {
		en: "Delibird",
		fr: "Cadoizo",
		es: "Delibird",
		it: "Delibird",
		pt: "Delibird",
		de: "Botogel"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Icy Snow",
			fr: "Verglas",
			es: "Nieve Helada",
			it: "Geloneve",
			pt: "Neve Congelada",
			de: "Eisiger Schnee"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			en: "Package Delivery",
			fr: "Livraison de Colis",
			es: "Entrega de Paquetes",
			it: "Consegna Pacchetto",
			pt: "Encomenda",
			de: "Paketlieferung"
		},

		effect: {
			en: "Put this Pokémon and all attached cards into your deck. If you do, search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Ajoutez à votre deck ce Pokémon et toutes les cartes attachées. Dans ce cas, cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu baraja. Si lo haces, busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Metti questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo. Se lo fai, cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Coloque este Pokémon e todas as cartas ligadas a ele no seu baralho. Se fizer isto, procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Lege dieses Pokémon und alle angelegten Karten in dein Deck. Wenn du das machst, durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It has a generous habit of sharing its food with people and Pokémon, so it's always scrounging around for more food."
	},

	thirdParty: {
		cardmarket: 567112
	}
}

export default card
