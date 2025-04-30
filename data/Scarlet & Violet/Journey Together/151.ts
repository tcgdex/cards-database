import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Lillie's Pearl",
		fr: "Perle de Lilie",
		es: "Perla de Lylia",
		de: "Lillys Perle",
		it: "Perla di Lylia",
		pt: "Pérola da Lílian",
		'es-mx': "Perla de Lillie"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "If the Lillie's Pokémon this card is attached to is Knocked Out by damage from an attack from your opponent's Pokémon, that player takes 1 fewer Prize card.",
		fr: "Si le Pokémon de Lilie auquel cette carte est attachée est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, ce dernier récupère une carte Récompense de moins.",
		es: "Si el Pokémon de Lylia al que está unida esta carta queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, ese jugador coge 1 carta de Premio menos.",
		de: "Wenn das Lillys Pokémon, an das diese Karte angelegt ist, durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, nimmt jener Spieler 1 Preiskarte weniger.",
		it: "Se il Pokémon di Lylia a cui è assegnata questa carta viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, quel giocatore prende una carta Premio in meno.",
		pt: "Se o Pokémon da Lílian ao qual esta carta está ligada for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, aquele jogador pegará 1 carta de Prêmio a menos.",
		'es-mx': "Si el Pokémon de Lillie al que está unida esta carta queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, ese jugador toma 1 carta de Premio menos."
	},

	trainerType: "Tool",
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
