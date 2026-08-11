import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [977],
	set: Set,

	name: {
		'en-us': "Dondozo",
		'fr-fr': "Oyacata",
		'es-es': "Dondozo",
		'it-it': "Dondozo",
		'pt-br': "Dondozo",
		'de-de': "Heerashai"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Supplemental Swallow-Up",
			'fr-fr': "Engloutissement en Plus",
			'es-es': "Engullir Más",
			'it-it': "Nutringhiottimento",
			'pt-br': "Engolida Suplementar",
			'de-de': "Zusätzliches Runterschlucken"
		},

		effect: {
			'en-us': "Look at the top 5 cards of your deck. You may attach any number of Basic Energy cards you find there to this Pokémon. Shuffle the other cards back into your deck.",
			'fr-fr': "Regardez les 5 cartes du dessus de votre deck. Vous pouvez attacher le nombre voulu de cartes Énergie de base que vous y trouvez à ce Pokémon. Mélangez les autres cartes avec votre deck.",
			'es-es': "Mira las 5 primeras cartas de tu baraja. Puedes unir cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a este Pokémon. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			'it-it': "Guarda le prime cinque carte del tuo mazzo. Puoi assegnare un numero qualsiasi di carte Energia base presenti tra esse a questo Pokémon. Poi rimischia le altre carte nel tuo mazzo.",
			'pt-br': "Olhe as 5 cartas de cima do seu baralho. Você poderá ligar qualquer número de cartas de Energia Básica que encontrar lá a este Pokémon. Embaralhe as outras cartas de volta no seu baralho.",
			'de-de': "Schau dir die obersten 5 Karten deines Decks an. Du kannst beliebig viele Basis-Energiekarten, die du dort findest, an dieses Pokémon anlegen. Mische die anderen Karten zurück in dein Deck."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hydro Splash",
			'fr-fr': "Hydro-Éclaboussure",
			'es-es': "Hidroestallido",
			'it-it': "Idrosplash",
			'pt-br': "Hidroborrifada",
			'de-de': "Hydroplatscher"
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon is a glutton, but it's bad at getting food. It teams up with a Tatsugiri to catch prey.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740545,
				tcgplayer: 523665,
				cardtrader: 265103
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740545,
				tcgplayer: 523665,
				cardtrader: 265103
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
