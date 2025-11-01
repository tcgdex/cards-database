import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [975],
	set: Set,

	name: {
		en: "Cetitan ex",
		fr: "Balbalèze-ex",
		de: "Kolowal-ex",
		it: "Cetitan-ex",
		es: "Cetitan ex",
		pt: "Cetitan ex",
		'es-mx': "Cetitan ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Snow Camouflage",
			fr: "Camouflage Neige",
			de: "Schneetarnung",
			it: "Camuffaneve",
			es: "Camuflaje de Nieve",
			pt: "Camuflagem de Neve",
			'es-mx': "Camuflaje de Nieve"
		},

		effect: {
			en: "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
			fr: "Chaque fois que votre adversaire joue une carte Objet ou Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
			de: "Verhindere jedes Mal, wenn dein Gegner 1 Item- oder Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die diesem Pokémon zugefügt werden.",
			it: "Ogni volta che il tuo avversario gioca una carta Strumento o Aiuto che ha in mano, previeni tutti gli effetti di quella carta su questo Pokémon.",
			es: "Cada vez que tu rival juegue una carta de Objeto o de Partidario de su mano, se evitan todos los efectos de esa carta infligidos a este Pokémon.",
			pt: "Sempre que seu oponente jogar uma carta de Item ou de Apoiador da mão dele, previna todos os efeitos daquela carta causados a este Pokémon.",
			'es-mx': "Cada vez que tu rival juegue 1 carta de Objeto o de Partidario de su mano, se evitan todos los efectos de esa carta infligidos a este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Water", "Colorless"],

		name: {
			en: "Crushing Press",
			fr: "Pression Écrasante",
			de: "Quetschende Presse",
			it: "Pressa Dirompente",
			es: "Presión Demoledora",
			pt: "Compressão Esmagadora",
			'es-mx': "Plancha Demoledora"
		},

		effect: {
			en: "You may discard a Stadium in play. If you do, this attack does 140 more damage.",
			fr: "Vous pouvez défausser un Stade en jeu. Dans ce cas, cette attaque inflige 140 dégâts supplémentaires.",
			de: "Du kannst 1 Stadionkarte im Spiel auf den Ablagestapel legen. Wenn du das machst, fügt diese Attacke 140 Schadenspunkte mehr zu.",
			it: "Puoi scartare una carta Stadio in gioco. Se lo fai, questo attacco infligge 140 danni in più.",
			es: "Puedes descartar 1 Estadio en juego. Si lo haces, este ataque hace 140 puntos de daño más.",
			pt: "Você pode descartar um Estádio em jogo. Se fizer isto, este ataque causará 140 pontos de dano a mais.",
			'es-mx': "Puedes descartar 1 Estadio en juego. Si lo haces, este ataque hace 140 puntos de daño más."
		},

		damage: "140+"
	}],

	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: 'holo'
		},
	],

	thirdParty: {
		cardmarket: 826084
	}
}

export default card
