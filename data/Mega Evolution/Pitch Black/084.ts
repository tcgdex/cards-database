import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Voltaic Lightning Energy",
		fr: "Énergie Lightning Voltaïque",
		es: "Energía Lightning Voltaica",
		de: "Voltaische Lightning-Energie",
		'es-mx': "Energía Lightning Voltaica",
		it: "Energia Lightning Voltaica",
		pt: "Energia Lightning Voltaica"
	},

	rarity: "Rare",
	category: "Energy",
	energyType: "Normal",
	regulationMark: "J",

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides {L} Energy.\n\nAttacks used by the {L} Pokémon this card is attached to do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {L}.\n\nLes attaques utilisées par le Pokémon {L} auquel cette carte est attachée infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		es: "Mientras esta carta esté unida a un Pokémon, proporciona 1 Energía {L}.\n\nLos ataques usados por el Pokémon {L} al que esté unida esta carta hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		'es-mx': "Mientras esta carta esté unida a un Pokémon, proporciona Energía {L}.\n\nLos ataques usados por el Pokémon {L} al que esté unida esta carta hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie {L}-Energie.\n\nDie eingesetzten Attacken des {L}-Pokémon, an das diese Karte angelegt ist, fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu\n(bevor Schwäche und Resistenz verrechnet werden).",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia {L}.\n\nGli attacchi usati dal Pokémon {L} a cui è assegnata questa carta infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia {L}.\n\nOs ataques usados pelo Pokémon {L} ao qual esta carta está ligada causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente\n(antes de aplicar Fraqueza e Resistência)."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895868,
				tcgplayer: 704841
			}
		},
	],
}

export default card
