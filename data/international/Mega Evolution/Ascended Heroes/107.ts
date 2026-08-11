import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Regirock ex",
		'fr-fr': "Regirock-ex",
		'es-es': "Regirock ex",
		'es-mx': "Regirock ex",
		'de-de': "Regirock-ex",
		'it-it': "Regirock-ex",
		'pt-br': "Regirock ex"
	},

	suffix: "ex",
	illustrator: "Nisota Niso",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [377],
	hp: 230,
	types: ["Fighting"],
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
			'en-us': "Attach up to 2 Basic {F} Energy cards from your discard pile to this Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie {F} de base de votre pile de défausse à ce Pokémon.",
			'es-es': "Une hasta 2 cartas de Energía {F} Básica de tu pila de descartes a este Pokémon.",
			'es-mx': "Une hasta 2 cartas de Energía {F} Básica de tu pila de descartes a este Pokémon.",
			'de-de': "Lege bis zu 2 Basis-{F}-Energiekarten aus deinem Ablagestapel an dieses Pokémon an.",
			'it-it': "Assegna a questo Pokémon fino a due carte Energia base {F} dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia {F} Básica da sua pilha de descarte a este Pokémon."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Giant Rock",
			'fr-fr': "Roc Géant",
			'es-es': "Roca Gigante",
			'es-mx': "Roca Gigante",
			'de-de': "Gigantischer Felsen",
			'it-it': "Roccia Gigante",
			'pt-br': "Pedregulho"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Stage 2 Pokémon, this attack does 140 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon de Niveau 2, cette attaque inflige 140 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon de Fase 2, este ataque hace 140 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon de Fase 2, este ataque hace 140 puntos de daño más.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Phase-2-Pokémon ist, fügt diese Attacke 140 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon di Fase 2, questo attacco infligge 140 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Estágio 2, este ataque causará 140 pontos de dano a mais."
		},

		damage: "140+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869718,
				tcgplayer: 675919
			}
		}
	],
}

export default card
