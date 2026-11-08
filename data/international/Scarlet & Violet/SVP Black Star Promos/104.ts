import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		'en-us': "Melmetal ex",
		'fr-fr': "Melmetal-ex",
		'es-es': "Melmetal ex",
		'it-it': "Melmetal-ex",
		'pt-br': "Melmetal ex",
		'de-de': "Melmetal-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 300,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Meltan",
		'fr-fr': "Meltan",
		'es-es': "Meltan",
		'it-it': "Meltan",
		'pt-br': "Meltan",
		'de-de': "Meltan"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Metal-bolize",
			'fr-fr': "Métal-Bolisme",
			'es-es': "Metal-bolizar",
			'it-it': "Metalbolismo",
			'pt-br': "Metal-bolizar",
			'de-de': "Metall-bolisieren"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic {M} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie {M} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía {M} Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base {M} e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia {M} Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-{M}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Full Metal Knuckle",
			'fr-fr': "Poing Métal Pur",
			'es-es': "Nudillo Metálico Total",
			'it-it': "Metalpugno",
			'pt-br': "Punho Metálico Máximo",
			'de-de': "Vollmetallfaust"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each {M} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie {M} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía {M} unida a este Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia {M} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia {M} ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {M}-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "PLANETA Igarashi",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 764547,
				tcgplayer: 546755
			},
		}
	],
}

export default card
