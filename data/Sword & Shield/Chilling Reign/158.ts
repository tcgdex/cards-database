import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Énergie Chance",
		en: "Lucky Energy",
		es: "Energía Suerte",
		it: "Energia Fortuna",
		pt: "Energia de Sorte",
		de: "Glücks-Energie"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Colorless.\nSi le Pokémon auquel cette carte est attachée est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire\n(même s'il est mis K.O.), piochez une carte.",
		en: "As long as this card is attached to a Pokémon, it provides Colorless Energy.\n\nIf the Pokémon this card is attached to is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if it is Knocked Out), draw a card.",
		es: "Mientras esta carta esté unida a 1 Pokémon, proporciona 1 Energía Colorless.\nSi el Pokémon al que está unida esta carta está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival\n(incluso si queda Fuera de Combate), roba 1 carta.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia Colorless.\nSe il Pokémon a cui è assegnata questa carta è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, pesca una carta.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia Colorless.\nSe o Pokémon ao qual esta carta está ligada estiver no Campo Ativo e for danificado por um ataque do Pokémon do seu oponente\n(mesmo que ele seja Nocauteado), compre 1 carta.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie Colorless-Energie.\nWenn das Pokémon, an das diese Karte angelegt ist, in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält\n(auch wenn es dadurch kampfunfähig wird), ziehe 1 Karte."
	},

	energyType: "Special",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 567266
	}
}

export default card
