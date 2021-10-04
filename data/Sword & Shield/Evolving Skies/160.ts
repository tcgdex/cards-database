import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Spirit Mask",
		fr: "Masque Spirituel",
		es: "Máscara de los Espíritus",
		it: "Maschera degli Spiriti",
		pt: "Máscara Espectral",
		de: "Seelenmaske"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "If the Pokémon this card is attached to is in the Active Spot and is damaged by an attack from your opponent’s Pokémon (even if it is Knocked Out), your opponent discards a card from their hand.",
		fr: "Si le Pokémon auquel cette carte est attachée est sur le Poste Actif et qu’il subit les dégâts d’une attaque d’un Pokémon de votre adversaire (même s’il est mis K.O.), votre adversaire défausse une carte de sa main.",
		es: "Si el Pokémon al que está unida esta carta está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), tu rival descarta 1 carta de su mano.",
		it: "Se il Pokémon a cui è assegnata questa carta è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, il tuo avversario scarta una carta che ha in mano.",
		pt: "Se o Pokémon ao qual esta carta está ligada estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que ele seja Nocauteado), o seu oponente descartará 1 carta da mão dele(a).",
		de: "Wenn das Pokémon, an das diese Karte angelegt ist, in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn es dadurch kampfunfähig wird), legt dein Gegner 1 Karte aus seiner Hand auf seinen Ablagestapel."
	},

	trainerType: "Tool",
	illustrator: "AYUMI ODASHIMA"
}

export default card