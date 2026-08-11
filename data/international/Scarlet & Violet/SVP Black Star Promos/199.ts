import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zarude",
		'fr-fr': "Zarude",
		'de-de': "Zarude",
		'it-it': "Zarude",
		'es-es': "Zarude",
		'pt-br': "Zarude"
	},

	illustrator: "Uninori",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [893],
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Pluck Off",
			'fr-fr': "Retrait",
			'de-de': "Abrupfen",
			'it-it': "Cogliere",
			'es-es': "Sacar",
			'pt-br': "Extirpar"
	},

		effect: {
			'en-us': "Search your deck for up to 3 Basic {G} Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Énergie {G} de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-{G}-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a tre carte Energia base {G}, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Busca en tu baraja hasta 3 cartas de Energía {G} Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 3 cartas de Energia {G} Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
	}
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			'en-us': "Hammer Whip",
			'fr-fr': "Fouet Marteau",
			'de-de': "Hammerpeitsche",
			'it-it': "Martelfrustata",
			'es-es': "Látigo Martillo",
			'pt-br': "Chicote de Martelo"
	},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar."
	},

		damage: 130
	}],

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 826137,
				tcgplayer: 637662
			},
		}
	]
}

export default card
