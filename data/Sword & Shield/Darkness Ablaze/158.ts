import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Billowing Smoke",
		fr: "Volutes de Fumée",
		es: "Nube de Humo",
		it: "Fumogeno",
		pt: "Fumaceira",
		de: "Rauchschwaden"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "If the Pokémon this card is attached to is Knocked Out by damage from an attack from your opponent's Pokémon, that player discards any Prize cards they would take for that Knock Out instead of putting those cards into their hand.",
		fr: "Si le Pokémon auquel cette carte est attachée est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, ce dernier défausse toute carte Récompense qu'il récupérerait avec ce K.O au lieu d'ajouter cette carte à sa main.",
		es: "Si el Pokémon al que está unida esta carta queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, ese jugador descarta cualquier carta de Premio que hubiera cogido por ese Fuera de Combate en vez de poner esas cartas en su mano.",
		it: "Se il Pokémon a cui è assegnata questa carta viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, quel giocatore scarta le carte Premio che avrebbe preso per effetto di quel KO invece di aggiungerle alle carte che ha in mano.",
		pt: "Se o Pokémon ao qual esta carta está ligada for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, aquele jogador descartará quaisquer cartas de Prêmio que pegaria daquele Nocaute ao invés de colocá-las na mão dele(a).",
		de: "Wenn das Pokémon, an das diese Karte angelegt ist, durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wird, legt jener Spieler alle Preiskarten, die er für jenen K. o. auf seine Hand nehmen würde, stattdessen auf seinen Ablagestapel."
	},

	trainerType: "Tool",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
