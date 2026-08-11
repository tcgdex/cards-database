import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Coach Trainer",
		'fr-fr': "Dresseurs Coach",
		'es-es': "Entrenador Maestro",
		'it-it': "Coach",
		'pt-br': "Técnicos de Treinador",
		'de-de': "Trainercoach"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez 2 cartes. Si votre Pokémon Actif est un Pokémon ESCOUADE, piochez 2 cartes supplémentaires.",
		'en-us': "Draw 2 cards. If your Active Pokémon is a TAG TEAM Pokémon, draw 2 more cards.",
		'es-es': "Roba 2 cartas. Si tu Pokémon Activo es un Pokémon de equipo de RELEVOS, roba 2 cartas más.",
		'it-it': "Pesca due carte. Se il tuo Pokémon attivo è un Pokémon ALLEATI, pesca altre due carte.",
		'pt-br': "Compre 2 cartas. Se o seu Pokémon Ativo for um Pokémon ALIADOS, compre 2 cartas a mais.",
		'de-de': "Ziehe 2 Karten. Wenn dein Aktives Pokémon ein TAG TEAM Pokémon ist, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 388757,
		tcgplayer: 195227
	}
}

export default card
