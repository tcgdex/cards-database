import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Regice ex",
		'fr-fr': "Regice-ex",
		'es-es': "Regice ex",
		'es-mx': "Regice ex",
		'de-de': "Regice-ex",
		'it-it': "Regice-ex",
		'pt-br': "Regice ex"
	},

	suffix: "ex",
	illustrator: "akagi",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [378],
	hp: 230,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Regi Charge",
			'fr-fr': "Regi-Charge",
			'es-es': "Regi Carga",
			'es-mx': "Regicarga",
			'de-de': "Regi-Ladung",
			'it-it': "Carica Regi",
			'pt-br': "Carga Regi"
		},

		effect: {
			'en-us': "Attach up to 2 Basic {W} Energy cards from your discard pile to this Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie {W} de base de votre pile de défausse à ce Pokémon.",
			'es-es': "Une hasta 2 cartas de Energía {W} Básica de tu pila de descartes a este Pokémon.",
			'es-mx': "Une hasta 2 cartas de Energía {W} Básica de tu pila de descartes a este Pokémon.",
			'de-de': "Lege bis zu 2 Basis-{W}-Energiekarten aus deinem Ablagestapel an dieses Pokémon an.",
			'it-it': "Assegna a questo Pokémon fino a due carte Energia base {W} dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia {W} Básica da sua pilha de descarte a este Pokémon."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Ice Prison",
			'fr-fr': "Prison de Glace",
			'es-es': "Prisión de Hielo",
			'es-mx': "Prisión de Hielo",
			'de-de': "Eisknast",
			'it-it': "Prigione di Ghiaccio",
			'pt-br': "Prisão Gélida"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon, and your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Descarta 2 Energías de este Pokémon, y el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Descarta 2 Energías de este Pokémon, y el Pokémon Activo de tu rival ahora está Paralizado.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel, und das Aktive Pokémon deines Gegners ist jetzt paralysiert.",
			'it-it': "Scarta due Energie da questo Pokémon e il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Descarte 2 Energias deste Pokémon, e o Pokémon Ativo do seu oponente agora está Paralisado."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869659,
				tcgplayer: 675860
			}
		}
	],
}

export default card
