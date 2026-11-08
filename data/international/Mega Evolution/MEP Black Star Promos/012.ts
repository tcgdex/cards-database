import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Lucario ex",
		'fr-fr': "Méga-Lucario-ex",
		'de-de': "Mega-Lucario-ex",
		'it-it': "Mega Lucario-ex",
		'es-es': "Mega-Lucario ex",
		'pt-br': "Mega Lucario ex",
		'es-mx': "Mega-Lucario ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 340,
	types: ["Fighting"],
	stage: "Stage1",
	dexId: [448],

	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'de-de': "Riolu",
		'it-it': "Riolu",
		'es-es': "Riolu",
		'pt-br': "Riolu",
		'es-mx': "Riolu"
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Aura Jab",
			'fr-fr': "Coup Aura",
			'de-de': "Aura-Hieb",
			'it-it': "Aurastoccata",
			'es-es': "Puya Aural",
			'pt-br': "Soco Aura",
			'es-mx': "Jab Aural"
		},

		effect: {
			'en-us': "Attach up to 3 Basic {F} Energy cards from your discard pile to your Benched Pokémon in any way you like.",
			'fr-fr': "Attachez jusqu'à 3 cartes Énergie {F} de base de votre pile de défausse à vos Pokémon de Banc comme il vous plaît.",
			'de-de': "Lege bis zu 3 Basis-{F}-Energiekarten aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an.",
			'it-it': "Assegna ai Pokémon nella tua panchina fino a tre carte Energia base {F} dalla tua pila degli scarti nel modo che preferisci.",
			'es-es': "Une hasta 3 cartas de Energía {F} Básica de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
			'pt-br': "Ligue até 3 cartas de Energia {F} Básica da sua pilha de descarte aos seus Pokémon no Banco como desejar.",
			'es-mx': "Une hasta 3 cartas de Energía {F} Básica de tu pila de descartes a tus Pokémon en Banca de la manera que quieras."
		},

		damage: 130
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Mega Brave",
			'fr-fr': "Méga Vaillant",
			'de-de': "Mega-Mut",
			'it-it': "Megacoraggio",
			'es-es': "Megavalentía",
			'pt-br': "Megavalentia",
			'es-mx': "Megavalentía"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Mega Brave.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Méga Vaillant.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Mega-Mut nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Megacoraggio.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Megavalentía.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Megavalentia.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Megavalentía."
		},

		damage: 270
	}],

	retreat: 2,
	regulationMark: "I",

	weaknesses: [{
		type: "Psychic",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 858146,
				tcgplayer: 663177
			}
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 858147,
				tcgplayer: 663178
			}
		},
	],
}

export default card
