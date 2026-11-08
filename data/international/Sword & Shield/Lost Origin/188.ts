import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [18],
	set: Set,

	name: {
		'en-us': "Pidgeot V",
		'fr-fr': "Roucarnage V",
		'es-es': "Pidgeot V",
		'it-it': "Pidgeot V",
		'pt-br': "Pidgeot V",
		'de-de': "Tauboss V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Vanishing Wings",
			'fr-fr': "Ailes Oblitérées",
			'es-es': "Alas de Fuga",
			'it-it': "Ali Evanescenti",
			'pt-br': "Asas Desvanecentes",
			'de-de': "Fluchtflügel"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is on your Bench, you may shuffle it and all attached cards into your deck.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez le mélanger dans votre deck, ainsi que toutes les cartes attachées.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajar todas las cartas.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi rimischiarlo nel tuo mazzo insieme a tutte le carte a esso assegnate.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá embaralhá-lo e todas as cartas ligadas a ele no seu baralho.",
			'de-de': "Einmal während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du es und alle angelegten Karten in dein Deck mischen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Flight Surf",
			'fr-fr': "Vol Glissé",
			'es-es': "Surfeo Aéreo",
			'it-it': "Surf Aereo",
			'pt-br': "Surfe Aéreo",
			'de-de': "Gleitflug"
		},

		effect: {
			'en-us': "If you have a Stadium in play, this attack does 80 more damage.",
			'fr-fr': "Si vous avez un Stade en jeu, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si tienes un Estadio en juego, este ataque hace 80 puntos de daño más.",
			'it-it': "Se hai in gioco una carta Stadio, questo attacco infligge 80 danni in più.",
			'pt-br': "Se você tiver um Estádio em jogo, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn du eine Stadionkarte im Spiel hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674193,
				tcgplayer: 284139
			}
		},
	],
}

export default card
