import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Burning Scarf",
		fr: "Bandana Brûlant",
		es: "Bandana Ardiente",
		it: "Bandana Ardente",
		pt: "Cachecol em Chamas",
		de: "Flammenhalstuch"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "If the Fire Pokémon this card is attached to is in the Active Spot and is damaged by an opponent’s attack (even if it is Knocked Out), the Attacking Pokémon is now Burned.",
		fr: "Si le Pokémon Fire auquel cette carte est attachée est sur le Poste Actif et qu’il subit les dégâts d’une attaque d’un adversaire (même s’il est mis K.O.), le Pokémon Attaquant est maintenant Brûlé.",
		es: "Si el Pokémon Fire al que está unida esta carta está en el Puesto Activo y resulta dañado por un ataque de tu rival (incluso si queda Fuera de Combate), el Pokémon Atacante pasa a estar Quemado.",
		it: "Se il Pokémon Fire a cui è assegnata questa carta è in posizione attiva e viene danneggiato da un attacco dell’avversario, anche se viene messo KO, il Pokémon attaccante viene bruciato.",
		pt: "Se o Pokémon Fire ao qual esta carta está ligada estiver no Campo Ativo e for danificado por um ataque do seu oponente (mesmo que ele seja Nocauteado), o Pokémon Atacante ficará Queimado.",
		de: "Wenn das Fire-Pokémon, an das diese Karte angelegt ist, in der Aktiven Position ist und durch eine Attacke deines Gegners Schaden erhält (auch wenn es dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt verbrannt."
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
