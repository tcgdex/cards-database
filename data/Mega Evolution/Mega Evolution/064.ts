import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Xerneas",
		fr: "Xerneas",
		de: "Xerneas",
		it: "Xerneas",
		es: "Xerneas",
		pt: "Xerneas",
		'es-mx': "Xerneas"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [716],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Geo Gate",
			fr: "Géo-Portail",
			de: "Geoportal",
			it: "Geoportale",
			es: "Geoportal",
			pt: "Geoportal",
			'es-mx': "Geoportal"
		},

		effect: {
			en: "Search your deck for up to 3 Basic {P} Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 Pokémon {P} de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 3 Basis-{P}-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a tre Pokémon Base {P} e mettili nella tua panchina. Poi rimischia il tuo mazzo.",
			es: "Busca en tu baraja hasta 3 Pokémon {P} Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 3 Pokémon {P} Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 3 Pokémon {P} Básicos y ponlos en tu Banca. Después, baraja tu mazo."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Bright Horns",
			fr: "Cornes Lumineuses",
			de: "Glänzendes Geweih",
			it: "Corna Splendenti",
			es: "Cuernos Brillantes",
			pt: "Chifres Luminosos",
			'es-mx': "Cuernos Brillantes"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Bright Horns.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Cornes Lumineuses.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Glänzendes Geweih nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Corna Splendenti.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Cuernos Brillantes.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Chifres Luminosos.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Cuernos Brillantes."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654403
	}
}

export default card