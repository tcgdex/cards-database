import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Virbank City Gym",
		'fr-fr': "Arène d’Ondes-sur-Mer",
		'es-es': "Gimnasio Hormigón",
		'it-it': "Palestra di Zondopoli",
		'pt-br': "Ginásio da Cidade de Virbank",
		'de-de': "Vapydro City-Arena"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Placez 2 marqueurs de dégâts supplémentaires sur les Pokémon Empoisonnés (les vôtres et ceux de votre adversaire) entre chaque tour.",
		'en-us': "Put 2 more damage counters on Poisoned Pokémon (both yours and your opponent’s) between turns.",
		'es-es': "Pon 2 contadores de daño más sobre los Pokémon Envenenados (tanto tuyos como de tu rival) entre turnos.",
		'it-it': "Metti altri due segnalini danno sui Pokémon avvelenati, sia tuoi che del tuo avversario, tra un turno e l’altro.",
		'pt-br': "Coloque 2 marcadores de danos adicionais nos Pokémon Envenenados (tanto seus quanto do seu oponente) entre as vezes de jogar.",
		'de-de': "Lege zwischen den Zügen 2 weitere Schadensmarken auf vergiftete Pokémon (deine und die deines Gegners)."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 280866,
		tcgplayer: 90385
	}
}

export default card
