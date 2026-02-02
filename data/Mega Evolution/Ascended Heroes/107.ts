import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Regirock ex",
		fr: "Regirock-ex",
		es: "Regirock ex",
		'es-mx': "Regirock ex",
		de: "Regirock-ex",
		it: "Regirock-ex",
		pt: "Regirock ex"
	},

	illustrator: "Nisota Niso",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Regi Charge",
			fr: "Regi-Charge",
			es: "Regi Carga",
			'es-mx': "Regicarga",
			de: "Regi-Ladung",
			it: "Carica Regi",
			pt: "Carga Regi"
		},

		effect: {
			en: "Attach up to 2 Basic {F} Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie {F} de base de votre pile de défausse à ce Pokémon.",
			es: "Une hasta 2 cartas de Energía {F} Básica de tu pila de descartes a este Pokémon.",
			'es-mx': "Une hasta 2 cartas de Energía {F} Básica de tu pila de descartes a este Pokémon.",
			de: "Lege bis zu 2 Basis-{F}-Energiekarten aus deinem Ablagestapel an dieses Pokémon an.",
			it: "Assegna a questo Pokémon fino a due carte Energia base {F} dalla tua pila degli scarti.",
			pt: "Ligue até 2 cartas de Energia {F} Básica da sua pilha de descarte a este Pokémon."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Giant Rock",
			fr: "Roc Géant",
			es: "Roca Gigante",
			'es-mx': "Roca Gigante",
			de: "Gigantischer Felsen",
			it: "Roccia Gigante",
			pt: "Pedregulho"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Stage 2 Pokémon, this attack does 140 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de Niveau 2, cette attaque inflige 140 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon de Fase 2, este ataque hace 140 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon de Fase 2, este ataque hace 140 puntos de daño más.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Phase-2-Pokémon ist, fügt diese Attacke 140 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon di Fase 2, questo attacco infligge 140 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Estágio 2, este ataque causará 140 pontos de dano a mais."
		},

		damage: "140+"
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675919,
		cardmarket: 869718
	}
}

export default card