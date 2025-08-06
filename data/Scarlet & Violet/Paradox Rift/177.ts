import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Technical Machine: Devolution",
		fr: "Capsule Technique : Dés-Évolution",
		es: "Máquina Técnica: Involución",
		it: "Macchinario Tecnico: Involuzione",
		pt: "Máquina Técnica: Involução",
		de: "Technische Maschine: Rückentwicklung"
	},

	rarity: "Uncommon",
	category: "Trainer",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Devolution",
			fr: "Dés-Évolution",
			es: "Involución",
			it: "Involuzione",
			pt: "Involução",
			de: "Rückentwicklung"
		},

		effect: {
			en: "Devolve each of your opponent's evolved Pokémon by putting the highest Stage Evolution card on it into your opponent's hand.",
			fr: "Faites dés-évoluer chacun des Pokémon évolués de votre adversaire en plaçant dans la main de votre adversaire la carte Évolution la plus élevée placée sur ceux-ci.",
			es: "Involuciona a cada uno de los Pokémon evolucionados de tu rival poniendo la carta de Evolución de fase más alta que tengan sobre ellos en la mano de tu rival.",
			it: "Annulla l'evoluzione di ciascuno dei Pokémon evoluti del tuo avversario prendendo la carta Evoluzione di fase più alta presente su di esso e aggiungendola alle carte nella mano del tuo avversario.",
			pt: "Reverta a evolução de cada um dos Pokémon evoluídos do seu oponente colocando a carta de Evolução de Estágio mais alto sobre ele na mão do seu oponente.",
			de: "Rückentwickle jedes entwickelte Pokémon deines Gegners, indem du deinem Gegner die daraufliegende Karte mit der höchsten Entwicklungsphase auf die Hand gibst."
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
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Studio Bora Inc.",

	thirdParty: {
		cardmarket: 740720
	}
}

export default card