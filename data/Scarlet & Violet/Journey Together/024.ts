import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Blaziken ex",
		fr: "Braségali-ex",
		es: "Blaziken ex",
		de: "Lohgock-ex",
		it: "Blaziken-ex",
		pt: "Blaziken ex",
		'es-mx': "Blaziken ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Seething Spirit",
			fr: "Esprit Bouillonnant",
			es: "Espíritu Incandescente",
			de: "Brodelnder Kampfgeist",
			it: "Spirito Ribollente",
			pt: "Espírito Furioso",
			'es-mx': "Espíritu Incandescente"
		},

		effect: {
			en: "Once during your turn, you may attach a Basic Energy card from your discard pile to 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Básica de tu pila de descartes a uno de tus Pokémon.",
			de: "Einmal während deines Zuges kannst du 1 Basis-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon anlegen.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia base dalla tua pila degli scarti.",
			pt: "Uma vez durante o seu turno, você poderá ligar uma carta de Energia Básica da sua pilha de descarte a 1 dos seus Pokémon.",
			'es-mx': "Una vez durante tu turno, puedes unir 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Smolder-sault",
			fr: "Pyro-ette",
			es: "Salto Abrasador",
			de: "Feuerflugrolle",
			it: "Capriola Ardente",
			pt: "Queima-lhota",
			'es-mx': "Pirosalto"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede atacar."
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
