import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [975],
	set: Set,

	name: {
		'en-us': "Cetitan ex",
		'fr-fr': "Balbalèze-ex",
		'de-de': "Kolowal-ex",
		'it-it': "Cetitan-ex",
		'es-es': "Cetitan ex",
		'pt-br': "Cetitan ex",
		'es-mx': "Cetitan ex"
	},


	suffix: "ex",
	illustrator: "kawayoo",

	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Cetoddle",
		'fr-fr': "Piétacé",
		'de-de': "Flaniwal",
		'it-it': "Cetoddle",
		'es-es': "Cetoddle",
		'pt-br': "Cetoddle",
		'es-mx': "Cetoddle"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Snow Camouflage",
			'fr-fr': "Camouflage Neige",
			'de-de': "Schneetarnung",
			'it-it': "Camuffaneve",
			'es-es': "Camuflaje de Nieve",
			'pt-br': "Camuflagem de Neve",
			'es-mx': "Camuflaje de Nieve"
		},

		effect: {
			'en-us': "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
			'fr-fr': "Chaque fois que votre adversaire joue une carte Objet ou Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
			'de-de': "Verhindere jedes Mal, wenn dein Gegner 1 Item- oder Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die diesem Pokémon zugefügt werden.",
			'it-it': "Ogni volta che il tuo avversario gioca una carta Strumento o Aiuto che ha in mano, previeni tutti gli effetti di quella carta su questo Pokémon.",
			'es-es': "Cada vez que tu rival juegue una carta de Objeto o de Partidario de su mano, se evitan todos los efectos de esa carta infligidos a este Pokémon.",
			'pt-br': "Sempre que seu oponente jogar uma carta de Item ou de Apoiador da mão dele, previna todos os efeitos daquela carta causados a este Pokémon.",
			'es-mx': "Cada vez que tu rival juegue 1 carta de Objeto o de Partidario de su mano, se evitan todos los efectos de esa carta infligidos a este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Water", "Colorless"],

		name: {
			'en-us': "Crushing Press",
			'fr-fr': "Pression Écrasante",
			'de-de': "Quetschende Presse",
			'it-it': "Pressa Dirompente",
			'es-es': "Presión Demoledora",
			'pt-br': "Compressão Esmagadora",
			'es-mx': "Plancha Demoledora"
		},

		effect: {
			'en-us': "You may discard a Stadium in play. If you do, this attack does 140 more damage.",
			'fr-fr': "Vous pouvez défausser un Stade en jeu. Dans ce cas, cette attaque inflige 140 dégâts supplémentaires.",
			'de-de': "Du kannst 1 Stadionkarte im Spiel auf den Ablagestapel legen. Wenn du das machst, fügt diese Attacke 140 Schadenspunkte mehr zu.",
			'it-it': "Puoi scartare una carta Stadio in gioco. Se lo fai, questo attacco infligge 140 danni in più.",
			'es-es': "Puedes descartar 1 Estadio en juego. Si lo haces, este ataque hace 140 puntos de daño más.",
			'pt-br': "Você pode descartar um Estádio em jogo. Se fizer isto, este ataque causará 140 pontos de dano a mais.",
			'es-mx': "Puedes descartar 1 Estadio en juego. Si lo haces, este ataque hace 140 puntos de daño más."
		},

		damage: "140+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 825939,
				tcgplayer: 632878
			}
		},
	],
}

export default card
