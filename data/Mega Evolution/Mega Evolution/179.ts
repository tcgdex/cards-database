import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Lucario ex",
		fr: "Méga-Lucario-ex",
		de: "Mega-Lucario-ex",
		it: "Mega Lucario-ex",
		es: "Mega-Lucario ex",
		pt: "Mega Lucario ex",
		'es-mx': "Mega-Lucario ex"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 340,
	types: ["Fighting"],
	stage: "Stage1",
	dexId: [448],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Aura Jab",
			fr: "Coup Aura",
			de: "Aura-Hieb",
			it: "Aurastoccata",
			es: "Puya Aural",
			pt: "Soco Aura",
			'es-mx': "Jab Aural"
		},

		effect: {
			en: "Attach up to 3 Basic {F} Energy cards from your discard pile to your Benched Pokémon in any way you like.",
			fr: "Attachez jusqu'à 3 cartes Énergie {F} de base de votre pile de défausse à vos Pokémon de Banc comme il vous plaît.",
			de: "Lege bis zu 3 Basis-{F}-Energiekarten aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an.",
			it: "Assegna ai Pokémon nella tua panchina fino a tre carte Energia base {F} dalla tua pila degli scarti nel modo che preferisci.",
			es: "Une hasta 3 cartas de Energía {F} Básica de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
			pt: "Ligue até 3 cartas de Energia {F} Básica da sua pilha de descarte aos seus Pokémon no Banco como desejar.",
			'es-mx': "Une hasta 3 cartas de Energía {F} Básica de tu pila de descartes a tus Pokémon en Banca de la manera que quieras."
		},

		damage: 130
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Mega Brave",
			fr: "Méga Vaillant",
			de: "Mega-Mut",
			it: "Megacoraggio",
			es: "Megavalentía",
			pt: "Megavalentia",
			'es-mx': "Megavalentía"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Mega Brave.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Méga Vaillant.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Mega-Mut nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Megacoraggio.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Megavalentía.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Megavalentia.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Megavalentía."
		},

		damage: 270
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654518
	}
}

export default card