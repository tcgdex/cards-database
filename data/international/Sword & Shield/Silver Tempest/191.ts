import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gym Trainer",
		'fr-fr': "Dresseurs d'Arène",
		'es-es': "Entrenador de Gimnasio",
		'it-it': "Allenatore della Palestra",
		'pt-br': "Treinador de Ginásio",
		'de-de': "Arenatrainer"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Draw 2 cards. If any of your Pokémon were Knocked Out during your opponent's last turn, draw 2 more cards.",
		'fr-fr': "Piochez 2 cartes. Si au moins l'un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire, piochez 2 cartes supplémentaires.",
		'es-es': "Roba 2 cartas. Si alguno de tus Pokémon quedó Fuera de Combate durante el último turno de tu rival, roba 2 cartas más.",
		'it-it': "Pesca due carte. Se uno qualsiasi dei tuoi Pokémon è stato messo KO durante l'ultimo turno del tuo avversario, pesca altre due carte.",
		'pt-br': "Compre 2 cartas. Se algum dos seus Pokémon tiver sido Nocauteado durante o último turno do seu oponente, compre 2 cartas a mais.",
		'de-de': "Ziehe 2 Karten. Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners kampfunfähig wurde, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",
	regulationMark: "D",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682239,
				tcgplayer: 451839
			}
		},
	],
}

export default card
