import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Technical Machine: Blindside",
		fr: "Capsule Technique : Angle Mort",
		es: "Máquina Técnica: Lado Ciego",
		it: "Macchinario Tecnico: Spiazzare",
		pt: "Máquina Técnica: Ponto Cego",
		de: "Technische Maschine: Aus heiterem Himmel"
	},

	rarity: "Uncommon",
	category: "Trainer",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Blindside",
			fr: "Angle Mort",
			es: "Lado Ciego",
			it: "Spiazzare",
			pt: "Ponto Cego",
			de: "Aus heiterem Himmel"
		},

		effect: {
			en: "This attack does 100 damage to 1 of your opponent's Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 100 dégâts à l'un des Pokémon de votre adversaire ayant au moins un marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 100 puntos de daño a uno de los Pokémon de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 100 danni a uno dei Pokémon del tuo avversario che ha dei segnalini danno. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 100 pontos de dano a 1 dos Pokémon do seu oponente que tiver algum contador de dano nele. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	effect: {
		en: "The Pokémon this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.) If this card is attached to 1 of your Pokémon, discard it at the end of your turn.",
		fr: "Le Pokémon auquel cette carte est attachée peut utiliser l'attaque sur cette carte. (Vous avez toujours besoin des Énergies nécessaires pour utiliser cette attaque.) Si cette carte est attachée à l'un de vos Pokémon, défaussez-la à la fin de votre tour.",
		es: "El Pokémon al que esté unida esta carta puede usar el ataque de esta carta. (Sigues necesitando las Energías necesarias para usar este ataque). Si esta carta está unida a uno de tus Pokémon, descártala al final de tu turno.",
		it: "Il Pokémon a cui è assegnata questa carta può usare l'attacco di questa carta. Devi comunque avere l'Energia necessaria per usare questo attacco. Se questa carta è assegnata a uno dei tuoi Pokémon, scartala alla fine del tuo turno.",
		pt: "O Pokémon ao qual esta carta está ligada pode usar o ataque desta carta. (Você ainda precisa da Energia necessária para usar este ataque.) Se esta carta estiver ligada a 1 dos seus Pokémon, descarte-a no final do seu turno.",
		de: "Das Pokémon, an das diese Karte angelegt ist, kann die Attacke auf dieser Karte einsetzen. (Du benötigst jedoch die für diese Attacke notwendige Energie.) Wenn diese Karte an 1 deiner Pokémon angelegt ist, lege sie am Ende deines Zuges auf deinen Ablagestapel."
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card