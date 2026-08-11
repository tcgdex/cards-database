import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Technical Machine: Crisis Punch",
		'fr-fr': "Capsule Technique : Poing de Crise",
		'es-es': "Máquina Técnica: Puñetazo Crítico",
		'it-it': "Macchinario Tecnico: Pugno Disperato",
		'pt-br': "Máquina Técnica: Socão Crítico",
		'de-de': "Technische Maschine: Krisenhieb"
	},

	rarity: "Uncommon",
	category: "Trainer",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Crisis Punch",
			'fr-fr': "Poing de Crise",
			'es-es': "Puñetazo Crítico",
			'it-it': "Pugno Disperato",
			'pt-br': "Socão Crítico",
			'de-de': "Krisenhieb"
		},

		effect: {
			'en-us': "You can use this attack only when your opponent has exactly 1 Prize card remaining.",
			'fr-fr': "Vous ne pouvez utiliser cette attaque que s'il reste exactement une carte Récompense à votre adversaire.",
			'es-es': "Puedes usar este ataque solo cuando a tu rival le quede exactamente una carta de Premio.",
			'it-it': "Puoi usare questo attacco solo quando il tuo avversario ha esattamente una carta Premio rimanente.",
			'pt-br': "Você só pode usar este ataque quando seu oponente tiver exatamente 1 carta de Prêmio restante.",
			'de-de': "Du kannst diese Attacke nur einsetzen, wenn dein Gegner genau 1 verbleibende Preiskarte hat."
		},

		damage: 280
	}],

	effect: {
		'en-us': "The Pokémon this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.) If this card is attached to 1 of your Pokémon, discard it at the end of your turn.",
		'fr-fr': "Le Pokémon auquel cette carte est attachée peut utiliser l'attaque sur cette carte. (Vous avez toujours besoin des Énergies nécessaires pour utiliser cette attaque.) Si cette carte est attachée à l'un de vos Pokémon, défaussez-la à la fin de votre tour.",
		'es-es': "El Pokémon al que esté unida esta carta puede usar el ataque de esta carta. (Sigues necesitando las Energías necesarias para usar este ataque). Si esta carta está unida a uno de tus Pokémon, descártala al final de tu turno.",
		'it-it': "Il Pokémon a cui è assegnata questa carta può usare l'attacco di questa carta. Devi comunque avere l'Energia necessaria per usare questo attacco. Se questa carta è assegnata a uno dei tuoi Pokémon, scartala alla fine del tuo turno.",
		'pt-br': "O Pokémon ao qual esta carta está ligada pode usar o ataque desta carta. (Você ainda precisa da Energia necessária para usar este ataque.) Se esta carta estiver ligada a 1 dos seus Pokémon, descarte-a no final do seu turno.",
		'de-de': "Das Pokémon, an das diese Karte angelegt ist, kann die Attacke auf dieser Karte einsetzen. (Du benötigst jedoch die für diese Attacke notwendige Energie.) Wenn diese Karte an 1 deiner Pokémon angelegt ist, lege sie am Ende deines Zuges auf deinen Ablagestapel."
	},

	trainerType: "Tool",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751629,
				tcgplayer: 534452,
				cardtrader: 274274
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751629,
				tcgplayer: 534452,
				cardtrader: 274274
			}
		},
	],

	illustrator: "Studio Bora Inc.",

	
}

export default card
