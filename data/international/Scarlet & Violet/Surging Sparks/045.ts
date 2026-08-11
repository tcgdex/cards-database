import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [365],
	set: Set,

	name: {
		'en-us': "Walrein",
		'fr-fr': "Kaimorse",
		'es-es': "Walrein",
		'it-it': "Walrein",
		'pt-br': "Walrein",
		'de-de': "Walraisa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Sealeo",
		'fr-fr': "Phogleur",
		'es-es': "Sealeo",
		'it-it': "Sealeo",
		'pt-br': "Sealeo",
		'de-de': "Seejong"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Frigid Fangs",
			'fr-fr': "Crocs Glacés",
			'es-es': "Colmillos Glaciales",
			'it-it': "Zanne Glaciali",
			'pt-br': "Presas Gélidas",
			'de-de': "Frostige Fänge"
		},

		effect: {
			'en-us': "During your opponent's next turn, Pokémon that have 2 or less Energy attached can't attack. (This includes new Pokémon that come into play.)",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les Pokémon auxquels 2 Énergies ou moins sont attachées ne peuvent pas attaquer. (Cela comprend les nouveaux Pokémon qui sont mis en jeu.)",
			'es-es': "Durante el próximo turno de tu rival, los Pokémon que tengan 2 Energías o menos unidas no pueden atacar. (Esto incluye los nuevos Pokémon que entren en juego).",
			'it-it': "Durante il prossimo turno del tuo avversario, i Pokémon che hanno due o meno Energie assegnate non possono attaccare. Questo include i nuovi Pokémon entrati in gioco.",
			'pt-br': "Durante o próximo turno do seu oponente, os Pokémon que tiverem 2 ou menos Energias ligadas a eles não poderão atacar. (Isto inclui novos Pokémon que entrarem em jogo.)",
			'de-de': "Während des nächsten Zuges deines Gegners können Pokémon, an die 2 oder weniger Energien angelegt sind, nicht angreifen. (Dies schließt neue Pokémon ein, die ins Spiel gebracht werden.)"
		},

		damage: 60
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Megaton Fall",
			'fr-fr': "Chute Mégatonne",
			'es-es': "Caída Megatón",
			'it-it': "Caduta Megatonica",
			'pt-br': "Queda do Megaton",
			'de-de': "Megatonnenfall"
		},

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794311,
				tcgplayer: 590093
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794311,
				tcgplayer: 590093
			}
		},
	],

	illustrator: "Mitsuhiro Arita",
	
}

export default card
