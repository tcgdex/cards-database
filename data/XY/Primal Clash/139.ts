import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Shrine of Memories",
		fr: "Sanctuaire des Souvenirs",
		es: "Santuario de Recuerdos",
		it: "Ara dei Ricordi",
		pt: "Santuário das Memórias",
		de: "Erinnerungsstätte"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Les Pokémon évolués de chaque joueur peuvent utiliser les attaques de leurs pré-évolutions. (Le joueur a toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
		en: "Each player's evolved Pokémon can use any attack from its previous Evolutions. (That player still needs the necessary Energy to use each attack.)",
		es: "Los Pokémon evolucionados de cada jugador pueden usar cualquier ataque de sus Evoluciones anteriores. (Ese jugador sigue necesitando la Energía necesaria para usar cada ataque).",
		it: "I Pokémon evoluti di entrambi i giocatori possono usare gli attacchi dei loro stadi evolutivi precedenti. Il giocatore deve comunque avere l'Energia necessaria per usare quegli attacchi.",
		pt: "Os Pokémon evoluídos de cada jogador podem usar qualquer ataque de suas Evoluções anteriores. (O jogador ainda assim precisa da Energia necessária para usar cada ataque.)",
		de: "Die entwickelten Pokémon beider Spieler können die Angriffe aus vorangegangenen Entwicklungsstufen verwenden. (Ein Spieler benötigt dazu die für jeden der Angriffe erforderlichen Energien.)"
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 273670
	}
}

export default card
