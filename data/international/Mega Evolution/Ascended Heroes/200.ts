import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Surfer",
		'fr-fr': "Surfeur",
		'es-es': "Surfista",
		'es-mx': "Surfista",
		'de-de': "Surfer",
		'it-it': "Surfista",
		'pt-br': "Surfista"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Switch your Active Pokémon with 1 of your Benched Pokémon. If you do, draw cards until you have 5 cards in your hand.",
		'fr-fr': "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc. Dans ce cas, piochez des cartes jusqu'à en avoir 5 en main.",
		'es-es': "Cambia tu Pokémon Activo por uno de tus Pokémon en Banca. Si lo haces, roba cartas hasta que tengas 5 cartas en tu mano.",
		'es-mx': "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca. Si lo haces, roba cartas hasta que tengas 5 cartas en tu mano.",
		'de-de': "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, ziehe so lange Karten, bis du 5 Karten auf deiner Hand hast.",
		'it-it': "Scambia il tuo Pokémon attivo con uno della tua panchina. Se lo fai, pesca fino ad avere cinque carte in mano.",
		'pt-br': "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco. Se fizer isto, compre cartas até ter 5 cartas na sua mão."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869811,
			tcgplayer: 676012
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869811,
			tcgplayer: 676012
		}
	},
],
}

export default card