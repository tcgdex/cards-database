import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [646],
	set: Set,

	name: {
		'en-us': "Kyurem VMAX",
		'fr-fr': "Kyurem VMAX",
		'es-es': "Kyurem VMAX",
		'it-it': "Kyurem VMAX",
		'pt-br': "Kyurem VMAX",
		'de-de': "Kyurem VMAX"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Kyurem V",
		'fr-fr': "Kyurem-V",
		'es-es': "Kyurem V",
		'it-it': "Kyurem-V",
		'pt-br': "Kyurem V",
		'de-de': "Kyurem-V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Glaciated World",
			'fr-fr': "Monde Glacé",
			'es-es': "Mundo Glacial",
			'it-it': "Mondo Congelato",
			'pt-br': "Mundo Glacial",
			'de-de': "Eiszeitwelt"
		},

		effect: {
			'en-us': "Once during your turn, you may discard the top card of your deck. If that card is a Water Energy card, attach it to 1 of your Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez défausser la carte du dessus de votre deck. Si cette carte-là est une carte Énergie Water, attachez-la à l'un de vos Pokémon.",
			'es-es': "Una vez durante tu turno, puedes descartar la primera carta de tu baraja. Si es una carta de Energía Water, únela a 1 de tus Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, puoi scartare la prima carta del tuo mazzo. Se quella carta è una carta Energia Water, assegnala a uno dei tuoi Pokémon.",
			'pt-br': "Uma vez durante o seu turno, você poderá descartar a carta de cima do seu baralho. Se aquela carta for uma carta de Energia Water, ligue-a a 1 dos seus Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du die oberste Karte deines Decks auf deinen Ablagestapel legen. Wenn jene Karte eine Water-Energiekarte ist, lege sie an 1 deiner Pokémon an."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			'en-us': "Max Frost",
			'fr-fr': "Givromax",
			'es-es': "Maxiescarcha",
			'it-it': "Dynabrina",
			'pt-br': "Geada Max",
			'de-de': "Dyna-Kälte"
		},

		effect: {
			'en-us': "You may discard any amount of Water Energy from this Pokémon. This attack does 50 more damage for each card you discarded in this way.",
			'fr-fr': "Vous pouvez défausser autant d'Énergies Water que vous le voulez de ce Pokémon. Cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'es-es': "Puedes descartar cualquier cantidad de Energías Water de este Pokémon. Este ataque hace 50 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'it-it': "Puoi scartare tutte le Energie Water che vuoi da questo Pokémon. Questo attacco infligge 50 danni in più per ogni carta che hai scartato in questo modo.",
			'pt-br': "Você pode descartar qualquer quantidade de Energia Water deste Pokémon. Este ataque causa 50 pontos de dano a mais para cada carta descartada desta forma.",
			'de-de': "Du kannst beliebig viele Water-Energien von diesem Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 50 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674059,
				tcgplayer: 283923
			}
		},
	],
}

export default card
