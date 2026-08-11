import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [235],
	set: Set,

	name: {
		'en-us': "Smeargle",
		'fr-fr': "Queulorior",
		'es-es': "Smeargle",
		'it-it': "Smeargle",
		'pt-br': "Smeargle",
		'de-de': "Farbeagle"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Colorful Palette",
			'fr-fr': "Palette Colorée",
			'es-es': "Paleta de Colores",
			'it-it': "Tavolozza Colorata",
			'pt-br': "Paleta Colorida",
			'de-de': "Bunte Farbpalette"
		},

		effect: {
			'en-us': "Look at the top 5 cards of your deck. You may attach any number of basic Energy cards you find there to 1 of your Pokémon. Shuffle the other cards back into your deck.",
			'fr-fr': "Regardez les 5 cartes du dessus de votre deck. Vous pouvez attacher le nombre voulu de cartes Énergie de base que vous y trouvez à l'un de vos Pokémon. Mélangez les autres cartes avec votre deck.",
			'es-es': "Mira las 5 primeras cartas de tu baraja. Puedes unir cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a 1 de tus Pokémon. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			'it-it': "Guarda le prime cinque carte del tuo mazzo. Puoi assegnare un numero qualsiasi di carte Energia base presenti tra esse a uno dei tuoi Pokémon. Poi rimischia le altre carte nel tuo mazzo.",
			'pt-br': "Olhe as 5 cartas de cima do seu baralho. Você poderá ligar qualquer número de cartas de Energia básica que encontrar lá a 1 dos seus Pokémon. Embaralhe as demais cartas de volta no seu baralho.",
			'de-de': "Schau dir die obersten 5 Karten deines Decks an. Du kannst beliebig viele Basis-Energiekarten, die du dort findest, an 1 deiner Pokémon anlegen. Mische die anderen Karten zurück in dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It draws symbols with the fluid that oozes from the tip of its tail. Depending on the symbol, Smeargle fanatics will pay big money for them.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682184,
				tcgplayer: 451789
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682184,
				tcgplayer: 451789
			}
		},
	],
}

export default card
