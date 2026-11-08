import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [257],
	set: Set,

	name: {
		'en-us': "Blaziken ex",
		'fr-fr': "Braségali-ex",
		'es-es': "Blaziken ex",
		'de-de': "Lohgock-ex",
		'it-it': "Blaziken-ex",
		'pt-br': "Blaziken ex",
		'es-mx': "Blaziken ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
		'es-es': "Combusken",
		'de-de': "Jungglut",
		'it-it': "Combusken",
		'pt-br': "Combusken",
		'es-mx': "Combusken"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Seething Spirit",
			'fr-fr': "Esprit Bouillonnant",
			'es-es': "Espíritu Incandescente",
			'de-de': "Brodelnder Kampfgeist",
			'it-it': "Spirito Ribollente",
			'pt-br': "Espírito Furioso",
			'es-mx': "Espíritu Incandescente"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a Basic Energy card from your discard pile to 1 of your Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía Básica de tu pila de descartes a uno de tus Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du 1 Basis-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon anlegen.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia base dalla tua pila degli scarti.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar uma carta de Energia Básica da sua pilha de descarte a 1 dos seus Pokémon.",
			'es-mx': "Una vez durante tu turno, puedes unir 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Smolder-sault",
			'fr-fr': "Pyro-ette",
			'es-es': "Salto Abrasador",
			'de-de': "Feuerflugrolle",
			'it-it': "Capriola Ardente",
			'pt-br': "Queima-lhota",
			'es-mx': "Pirosalto"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede atacar."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "takuyoa",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817176,
				tcgplayer: 623451
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 841284,
			}
		},
		{
			type: 'holo',
			stamp: ['set-logo'],
			size: 'jumbo'
		},
		{
			type: 'holo',
			size: 'jumbo'
		}
	],
}

export default card
