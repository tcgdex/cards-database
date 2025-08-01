import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Single Strike Energy",
		fr: "Énergie Poing Final",
		es: "Energía Golpe Brusco",
		it: "Energia Colpo Singolo",
		pt: "Energia Golpe Decisivo",
		de: "Fokussierter-Angriff-Energie"
	},

	rarity: "Secret Rare",
	category: "Energy",

	effect: {
		en: "This card can only be attached to a Single Strike Pokémon. If this card is attached to anything other than a Single Strike Pokémon, discard this card.\n\nAs long as this card is attached to a Pokémon, it provides Fighting and Darkness Energy but provides only 1 Energy at a time, and the attacks of the Pokémon this card is attached to do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
		fr: "Cette carte ne peut être attachée qu'à un Pokémon Poing Final. Si cette carte est attachée à autre chose qu'un Pokémon Poing Final, défaussez-la.\n\nTant que cette carte est attachée à un Pokémon, elle fournit de l'Énergie Fighting et Darkness (mais seulement une Énergie à la fois), et les attaques du Pokémon auquel cette carte est attachée infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		es: "Esta carta solo puede unirse a Pokémon Golpe Brusco. Si esta carta está unida a cualquier otra carta que no sea un Pokémon Golpe Brusco, descarta esta carta.\n\nMientras esta carta esté unida a 1 Pokémon, proporciona Energía Fighting y Darkness, pero proporciona solo 1 Energía a la vez, y los ataques del Pokémon al que esté unida esta carta hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		it: "Questa carta può essere assegnata solo a Pokémon Colpo Singolo. Scarta questa carta se è assegnata a un Pokémon che non è un Pokémon Colpo Singolo.\n\nFintanto che questa carta è assegnata a un Pokémon, fornisce Energia Fighting e Darkness ma solo una alla volta, e gli attacchi del Pokémon a cui è assegnata questa carta infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		pt: "Esta carta só pode ser ligada a um Pokémon Golpe Decisivo. Se esta carta estiver ligada a qualquer coisa além de um Pokémon Golpe Decisivo, descarte esta carta.\n\nEnquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia Fighting e Darkness, mas fornecerá 1 Energia por vez, e os ataques do Pokémon ao qual esta carta está ligada causarão 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		de: "Diese Karte kann nur an ein Fokussierter-Angriff-Pokémon angelegt sein. Wenn diese Karte an etwas anderes als ein Fokussierter-Angriff-Pokémon angelegt ist, lege diese Karte auf deinen Ablagestapel.\n\nSolange diese Karte an ein Pokémon angelegt ist, liefert sie Fighting- und Darkness-Energie, aber immer nur 1 Energie. Die Attacken des Pokémon, an das diese Karte angelegt ist, fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu\n(bevor Schwäche und Resistenz verrechnet werden)."
	},

	energyType: "Special",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 546121
	}
}

export default card
