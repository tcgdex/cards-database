import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [568],
	set: Set,

	name: {
		en: "Trubbish",
		fr: "Miamiasme",
		es: "Trubbish",
		it: "Trubbish",
		pt: "Trubbish",
		de: "Unratütox"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Shibuzoh.",

	description: {
		en: "This Pokémon was born from a bag stuffed with trash. Galarian Weezing relish the fumes belched by Trubbish."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
			de: "Familienruf",
			es: "Llamar a la Familia",
			pt: "Chamar a Família",
			it: "Cerca Famiglia"
		},

		effect: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck.",
			es: "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			pt: "Procure por 1 Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Super Poison Breath",
			fr: "Super Haleine Empoisonnée",
			de: "Super-Gifthauch",
			es: "Aliento Supervenenoso",
			pt: "Super-hálito Venenoso",
			it: "Super Velenospiro"
		},

		damage: 20,

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582796
	}
}

export default card