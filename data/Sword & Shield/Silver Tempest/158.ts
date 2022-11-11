import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Gym Trainer",
		fr: "Dresseurs d'Arène",
		es: "Entrenador de Gimnasio",
		it: "Allenatore della Palestra",
		pt: "Treinador de Ginásio",
		de: "Arenatrainer"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Draw 2 cards. If any of your Pokémon were Knocked Out during your opponent's last turn, draw 2 more cards.",
		fr: "Piochez 2 cartes. Si au moins l'un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire, piochez 2 cartes supplémentaires.",
		es: "Roba 2 cartas. Si alguno de tus Pokémon quedó Fuera de Combate durante el último turno de tu rival, roba 2 cartas más.",
		it: "Pesca due carte. Se uno qualsiasi dei tuoi Pokémon è stato messo KO durante l'ultimo turno del tuo avversario, pesca altre due carte.",
		pt: "Compre 2 cartas. Se algum dos seus Pokémon tiver sido Nocauteado durante o último turno do seu oponente, compre 2 cartas a mais.",
		de: "Ziehe 2 Karten. Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners kampfunfähig wurde, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",
	regulationMark: "D"
}

export default card