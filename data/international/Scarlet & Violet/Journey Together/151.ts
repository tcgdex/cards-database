import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lillie's Pearl",
		'fr-fr': "Perle de Lilie",
		'es-es': "Perla de Lylia",
		'de-de': "Lillys Perle",
		'it-it': "Perla di Lylia",
		'pt-br': "Pérola da Lílian",
		'es-mx': "Perla de Lillie"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "If the Lillie's Pokémon this card is attached to is Knocked Out by damage from an attack from your opponent's Pokémon, that player takes 1 fewer Prize card.",
		'fr-fr': "Si le Pokémon de Lilie auquel cette carte est attachée est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, ce dernier récupère une carte Récompense de moins.",
		'es-es': "Si el Pokémon de Lylia al que está unida esta carta queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, ese jugador coge 1 carta de Premio menos.",
		'de-de': "Wenn das Lillys Pokémon, an das diese Karte angelegt ist, durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, nimmt jener Spieler 1 Preiskarte weniger.",
		'it-it': "Se il Pokémon di Lylia a cui è assegnata questa carta viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, quel giocatore prende una carta Premio in meno.",
		'pt-br': "Se o Pokémon da Lílian ao qual esta carta está ligada for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, aquele jogador pegará 1 carta de Prêmio a menos.",
		'es-mx': "Si el Pokémon de Lillie al que está unida esta carta queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, ese jugador toma 1 carta de Premio menos."
	},

	trainerType: "Tool",
	regulationMark: "I",
	illustrator: "AYUMI ODASHIMA",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817303,
				tcgplayer: 623578
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817303,
				tcgplayer: 623578
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 822532,
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			stamp: ['player-rewards-program']
		}
	],
}

export default card
