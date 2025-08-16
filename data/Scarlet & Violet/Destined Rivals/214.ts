import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [377],
	set: Set,

	name: {
		en: "Regirock ex",
		fr: "Regirock-ex",
		de: "Regirock-ex",
		it: "Regirock-ex",
		es: "Regirock ex",
		pt: "Regirock ex",
		'es-mx': "Regirock ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Regi Charge",
			fr: "Regi-Charge",
			de: "Regi-Ladung",
			it: "Carica Regi",
			es: "Regi Carga",
			pt: "Carga Regi",
			'es-mx': "Regicarga"
		},

		effect: {
			en: "Attach up to 2 Basic {F} Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie {F} de base de votre pile de défausse à ce Pokémon.",
			de: "Lege bis zu 2 Basis-{F}-Energiekarten aus deinem Ablagestapel an dieses Pokémon an.",
			it: "Assegna a questo Pokémon fino a due carte Energia base {F} dalla tua pila degli scarti.",
			es: "Une hasta 2 cartas de Energía {F} Básica de tu pila de descartes a este Pokémon.",
			pt: "Ligue até 2 cartas de Energia {F} Básica da sua pilha de descarte a este Pokémon.",
			'es-mx': "Une hasta 2 cartas de Energía {F} Básica de tu pila de descartes a este Pokémon."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Giant Rock",
			fr: "Roc Géant",
			de: "Gigantischer Felsen",
			it: "Roccia Gigante",
			es: "Roca Gigante",
			pt: "Pedregulho",
			'es-mx': "Roca Gigante"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Stage 2 Pokémon, this attack does 140 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de Niveau 2, cette attaque inflige 140 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Phase-2-Pokémon ist, fügt diese Attacke 140 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon di Fase 2, questo attacco infligge 140 danni in più.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon de Fase 2, este ataque hace 140 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Estágio 2, este ataque causará 140 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon de Fase 2, este ataque hace 140 puntos de daño más."
		},

		damage: "140+"
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card