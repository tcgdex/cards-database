import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Agatha",
		'fr-fr': "Agatha",
		'es-es': "Agatha",
		'it-it': "Agatha",
		'pt-br': "Agatha",
		'de-de': "Agathe"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Move up to 3 damage counters from your Active Pokémon to your opponent's Active Pokémon.",
		'fr-fr': "Déplacez jusqu'à 3 marqueurs de dégâts de votre Pokémon Actif vers le Pokémon Actif de votre adversaire.",
		'es-es': "Mueve hasta 3 contadores de daño de tu Pokémon Activo al Pokémon Activo de tu rival.",
		'it-it': "Sposta fino a tre segnalini danno dal tuo Pokémon attivo al Pokémon attivo del tuo avversario.",
		'pt-br': "Mova até 3 contadores de dano do seu Pokémon Ativo para o Pokémon Ativo do seu oponente.",
		'de-de': "Verschiebe bis zu 3 Schadensmarken von deinem Aktiven Pokémon auf das Aktive Pokémon deines Gegners."
	},

	trainerType: "Supporter",


	illustrator: "NC Empire",
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 567318,
				tcgplayer: 241813
			}
		},
	],
}

export default card
