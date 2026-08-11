import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Lucario ex",
		'fr-fr': "Méga-Lucario-ex",
		'es-es': "Mega-Lucario ex",
		'es-mx': "Mega-Lucario ex",
		'de-de': "Mega-Lucario-ex",
		'it-it': "Mega Lucario-ex",
		'pt-br': "Mega Lucario ex"
	},
	evolveFrom: {
		'en-us': "Riolu",
		'de-de': "Riolu",
		'es-es': "Riolu",
		'fr-fr': "Riolu",
		'it-it': "Riolu",
		'pt-br': "Riolu",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [448],
	hp: 340,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Aura Jab",
			'fr-fr': "Coup Aura",
			'es-es': "Puya Aural",
			'es-mx': "Jab Aural",
			'de-de': "Aura-Hieb",
			'it-it': "Aurastoccata",
			'pt-br': "Soco Aura"
		},

		effect: {
			'en-us': "Attach up to 3 Basic {F} Energy cards from your discard pile to your Benched Pokémon in any way you like.",
			'fr-fr': "Attachez jusqu'à 3 cartes Énergie {F} de base de votre pile de défausse à vos Pokémon de Banc comme il vous plaît.",
			'es-es': "Une hasta 3 cartas de Energía {F} Básica de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
			'es-mx': "Une hasta 3 cartas de Energía {F} Básica de tu pila de descartes a tus Pokémon en Banca de la manera que quieras.",
			'de-de': "Lege bis zu 3 Basis-{F}-Energiekarten aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an.",
			'it-it': "Assegna ai Pokémon nella tua panchina fino a tre carte Energia base {F} dalla tua pila degli scarti nel modo che preferisci.",
			'pt-br': "Ligue até 3 cartas de Energia {F} Básica da sua pilha de descarte aos seus Pokémon no Banco como desejar."
		},

		damage: 130
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Mega Brave",
			'fr-fr': "Méga Vaillant",
			'es-es': "Megavalentía",
			'es-mx': "Megavalentía",
			'de-de': "Mega-Mut",
			'it-it': "Megacoraggio",
			'pt-br': "Megavalentia"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Mega Brave.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Méga Vaillant.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Megavalentía.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Megavalentía.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Mega-Mut nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Megacoraggio.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Megavalentia."
		},

		damage: 270
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869724,
				tcgplayer: 675925
			}
		}
	],
}

export default card
