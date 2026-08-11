import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Reboot Pod",
		'fr-fr': "Capsule de Redémarrage",
		'es-es': "Cápsula Reinicio",
		'it-it': "Navicella di Riavvio",
		'pt-br': "Cápsula do Reinício",
		'de-de': "Reboot-Modul"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		'en-us': "Attach a Basic Energy card from your discard pile to each of your Future Pokémon.",
		'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à chacun de vos Pokémon Temps futur.",
		'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a cada uno de tus Pokémon del futuro.",
		'it-it': "Assegna a ciascuno dei tuoi Pokémon Tempo Futuro una carta Energia base dalla tua pila degli scarti.",
		'pt-br': "Ligue uma carta de Energia Básica da sua pilha de descarte a cada um dos seus Pokémon Futuristas.",
		'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an jedes deiner Pokémon aus der Zukunft an."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760788,
				tcgplayer: 542675
			}
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"]
		}
	],

	illustrator: "inose yukie",

}

export default card