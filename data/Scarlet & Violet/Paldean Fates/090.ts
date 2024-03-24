import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Technical Machine: Crisis Punch",
		fr: "Machine Technique : Poing de Crise",
		es: "Máquina Técnica: Puñetazo Crítico",
		it: "Macchinario Tecnico: Pugno Disperato",
		pt: "Máquina Técnica: Socão Crítico"
	},

	rarity: "Uncommon",
	category: "Trainer",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Crisis Punch",
			fr: "Poing de Crise",
			es: "Puñetazo Crítico",
			it: "Pugno Disperato",
			pt: "Socão Crítico"
		},

		effect: {
			en: "You can use this attack only when your opponent has exactly 1 Prize card remaining.",
			fr: "Vous ne pouvez utiliser cette attaque que s'il reste exactement une carte Récompense à votre adversaire.",
			es: "Puedes usar este ataque solo cuando a tu rival le quede exactamente una carta de Premio.",
			it: "Puoi usare questo attacco solo quando il tuo avversario ha esattamente una carta Premio rimanente.",
			pt: "Você só pode usar este ataque quando seu oponente tiver exatamente 1 carta de Prêmio restante."
		},

		damage: 280
	}],

	effect: {
		en: "The Pokémon this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.) If this card is attached to 1 of your Pokémon, discard it at the end of your turn.",
		fr: "Le Pokémon auquel cette carte est attachée peut utiliser l'attaque sur cette carte. (Vous avez toujours besoin des Énergies nécessaires pour utiliser cette attaque.) Si cette carte est attachée à l'un de vos Pokémon, défaussez-la à la fin de votre tour.",
		es: "El Pokémon al que esté unida esta carta puede usar el ataque de esta carta. (Sigues necesitando las Energías necesarias para usar este ataque). Si esta carta está unida a uno de tus Pokémon, descártala al final de tu turno.",
		it: "Il Pokémon a cui è assegnata questa carta può usare l'attacco di questa carta. Devi comunque avere l'Energia necessaria per usare questo attacco. Se questa carta è assegnata a uno dei tuoi Pokémon, scartala alla fine del tuo turno.",
		pt: "O Pokémon ao qual esta carta está ligada pode usar o ataque desta carta. (Você ainda precisa da Energia necessária para usar este ataque.) Se esta carta estiver ligada a 1 dos seus Pokémon, descarte-a no final do seu turno."
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card