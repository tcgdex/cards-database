import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [235],
	set: Set,

	name: {
		en: "Smeargle",
		fr: "Queulorior",
		es: "Smeargle",
		it: "Smeargle",
		pt: "Smeargle",
		de: "Farbeagle"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Colorful Palette",
			fr: "Palette Colorée",
			es: "Paleta de Colores",
			it: "Tavolozza Colorata",
			pt: "Paleta Colorida",
			de: "Bunte Farbpalette"
		},

		effect: {
			en: "Look at the top 5 cards of your deck. You may attach any number of basic Energy cards you find there to 1 of your Pokémon. Shuffle the other cards back into your deck.",
			fr: "Regardez les 5 cartes du dessus de votre deck. Vous pouvez attacher le nombre voulu de cartes Énergie de base que vous y trouvez à l'un de vos Pokémon. Mélangez les autres cartes avec votre deck.",
			es: "Mira las 5 primeras cartas de tu baraja. Puedes unir cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a 1 de tus Pokémon. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			it: "Guarda le prime cinque carte del tuo mazzo. Puoi assegnare un numero qualsiasi di carte Energia base presenti tra esse a uno dei tuoi Pokémon. Poi rimischia le altre carte nel tuo mazzo.",
			pt: "Olhe as 5 cartas de cima do seu baralho. Você poderá ligar qualquer número de cartas de Energia básica que encontrar lá a 1 dos seus Pokémon. Embaralhe as demais cartas de volta no seu baralho.",
			de: "Schau dir die obersten 5 Karten deines Decks an. Du kannst beliebig viele Basis-Energiekarten, die du dort findest, an 1 deiner Pokémon anlegen. Mische die anderen Karten zurück in dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682184
	}
}

export default card
