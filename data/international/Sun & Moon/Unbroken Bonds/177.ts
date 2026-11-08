import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Koga’s Trap",
		'fr-fr': "Piège de Koga",
		'es-es': "Trampa de Koga",
		'it-it': "Trappola di Koga",
		'pt-br': "Armadilha do Koga",
		'de-de': "Kogas Falle"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
		'en-us': "Your opponent’s Active Pokémon is now Confused and Poisoned.",
		'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
		'it-it': "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
		'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
		'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
	},
	trainerType: "Supporter",

}

export default card
