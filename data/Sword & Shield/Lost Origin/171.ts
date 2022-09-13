import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Gift Energy",
		fr: "Énergie Cadeau",
		es: "Energía Regalo",
		it: "Energia Regalo",
		pt: "Energia de Presente",
		de: "Geschenk-Energie"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Colorless Energy.\nIf the Pokémon this card is attached to is Knocked Out by damage from an attack from your opponent's Pokémon, draw cards until you have 7 cards in your hand.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Colorless.\nSi le Pokémon auquel cette carte est attachée est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, piochez des cartes jusqu'à en avoir 7 en main.",
		es: "Mientras esta carta esté unida a 1 Pokémon, proporciona 1 Energía Colorless.\nSi el Pokémon al que está unida esta carta queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, roba cartas hasta que tengas 7 cartas en tu mano.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia Colorless.\nSe il Pokémon a cui è assegnata questa carta viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, pesca fino ad avere sette carte in mano.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia Colorless.\nSe o Pokémon ao qual esta carta está ligada for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, compre cartas até ter 7 cartas na sua mão.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie Colorless-Energie.\nWenn das Pokémon, an das diese Karte angelegt ist, durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, ziehe so lange Karten, bis du 7 Karten auf deiner Hand hast."
	},

	energyType: "Special",
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card