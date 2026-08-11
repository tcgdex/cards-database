import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Lucky Helmet",
		'fr-fr': "Casque Chance",
		'es-es': "Casco Suerte",
		'it-it': "Fortunelmo",
		'pt-br': "Capacete da Sorte",
		'de-de': "Glückshelm"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chaque fois que le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si le Pokémon est mis K.O.), piochez 2 cartes.",
		'en-us': "Whenever the Pokémon this card is attached to is your Active Pokémon and is damaged by an opponent's attack (even if that Pokémon is Knocked Out), draw 2 cards.",
		'es-es': "Cuando el Pokémon al que está unida esta carta es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si ese Pokémon queda Fuera de Combate), roba 2 cartas.",
		'it-it': "Ogni volta che il Pokémon a cui è stata assegnata questa carta è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, pesca due carte.",
		'pt-br': "Sempre que o Pokémon ao qual este card estiver ligado for o seu Pokémon Ativo e for danificado pelo ataque de um oponente (mesmo se este Pokémon for Nocauteado), compre 2 cards.",
		'de-de': "Ziehe jedes Mal 2 Karten, wenn das Pokémon, an das diese Karte angelegt ist, dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird)."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 284258,
		tcgplayer: 101499
	}
}

export default card
