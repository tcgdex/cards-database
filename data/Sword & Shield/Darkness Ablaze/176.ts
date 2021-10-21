import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Powerful Colorless Energy",
		fr: "Énergie Colorless Puissance",
		es: "Energía Colorless Poderosa",
		it: "Energia Colorless Potente",
		pt: "Energia Colorless Poderosa",
		de: "Kraft-Colorless-Energie"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Colorless Energy.\n\nThe attacks of the Colorless Pokémon this card is attached to do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Colorless.\n\nLes attaques du Pokémon Colorless auquel cette carte est attachée infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		es: "Mientras esta carta esté unida a 1 Pokémon, proporciona 1 Energía Colorless.\n\nLos ataques del Pokémon Colorless al que esté unida esta carta hacen 20 puntos de daño más al Pokémon Activo de tu rival\n\n(antes de aplicar Debilidad y Resistencia).",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia Colorless.\n\nGli attacchi del Pokémon Colorless a cui è assegnata questa carta infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia Colorless.\n\nOs ataques do Pokémon Colorless ao qual esta carta está ligada causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente\n\n(antes de aplicar Fraqueza e Resistência).",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie Colorless-Energie.\n\nDie Attacken des Colorless-Pokémon, an das diese Karte angelegt ist, fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu\n(bevor Schwäche und Resistenz verrechnet werden)."
	},

	energyType: "Special",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
