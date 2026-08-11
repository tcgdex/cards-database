import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Hypnotoxic Laser",
		'fr-fr': "Laser Hypnotoxique",
		'es-es': "Láser Hipnotóxico",
		'it-it': "Raggio Ipnotossico",
		'pt-br': "Laser Hipnotóxico",
		'de-de': "Hypnotoxinlaser"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est aussi Endormi.",
		'en-us': "Your opponent’s Active Pokémon is now Poisoned. Flip a coin. If heads, your opponent’s Active Pokémon is also Asleep.",
		'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido también.",
		'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene anche addormentato.",
		'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente também ficará Adormecido.",
		'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Wirf 1 Münze. Bei „Kopf“ schläft das Aktive Pokémon jetzt auch noch."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280863,
		tcgplayer: 86256
	}
}

export default card
