import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [383],
	set: Set,

	name: {
		'en-us': "Groudon",
		'fr-fr': "Groudon",
		'es-es': "Groudon",
		'pt-br': "Groudon",
		'it-it': "Groudon",
		'de-de': "Groudon"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Swelling Power",
			'fr-fr': "Puissance Grandissante",
			'es-es': "Poder Desbordante",
			'pt-br': "Poder Crescente",
			'it-it': "Potere Amplificato",
			'de-de': "Anschwellende Kraft"
		},

		effect: {
			'en-us': "Attach a Basic {F} Energy card from your hand to 1 of your Pokémon.",
			'fr-fr': "Attachez une carte Énergie {F} de base de votre main à l'un de vos Pokémon.",
			'es-es': "Une 1 carta de Energía {F} Básica de tu mano a uno de tus Pokémon.",
			'pt-br': "Ligue uma carta de Energia {F} Básica da sua mão a 1 dos seus Pokémon.",
			'it-it': "Assegna a uno dei tuoi Pokémon una carta Energia base {F} dalla tua mano.",
			'de-de': "Lege 1 Basis-{F}-Energiekarte aus deiner Hand an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Magma Purge",
			'fr-fr': "Nettoyage Magma",
			'es-es': "Purga Magma",
			'pt-br': "Expurgação Magmática",
			'it-it': "Magmarimozione",
			'de-de': "Magma-Auswurf"
		},

		effect: {
			'en-us': "Discard up to 4 Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way.",
			'fr-fr': "Défaussez jusqu'à 4 Énergies de vos Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			'es-es': "Descarta hasta 4 Energías de tus Pokémon. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			'pt-br': "Descarte até 4 Energias dos seus Pokémon. Este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
			'it-it': "Scarta fino a quattro Energie dai tuoi Pokémon. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
			'de-de': "Lege bis zu 4 Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu."
		},

		damage: "60×"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	illustrator: "Uta",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805438,
				tcgplayer: 610404
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805438,
				tcgplayer: 610404
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806476,
				tcgplayer: 610571
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806477,
				tcgplayer: 610672
			}
		},
	],
}

export default card
