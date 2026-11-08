import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Agatha",
		'en-us': "Agatha",
		'es-es': "Agatha",
		'it-it': "Agatha",
		'pt-br': "Agatha",
		'de-de': "Agathe"
	},

	illustrator: "NC Empire",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'fr-fr': "Déplacez jusqu'à 3 marqueurs de dégâts de votre Pokémon Actif vers le Pokémon Actif de votre adversaire.",
		'en-us': "Move up to 3 damage counters from your Active Pokémon to your opponent's Active Pokémon.",
		'es-es': "Mueve hasta 3 contadores de daño de tu Pokémon Activo al Pokémon Activo de tu rival.",
		'it-it': "Sposta fino a tre segnalini danno dal tuo Pokémon attivo al Pokémon attivo del tuo avversario.",
		'pt-br': "Mova até 3 contadores de dano do seu Pokémon Ativo para o Pokémon Ativo do seu oponente.",
		'de-de': "Verschiebe bis zu 3 Schadensmarken von deinem Aktiven Pokémon auf das Aktive Pokémon deines Gegners."
	},

	trainerType: "Supporter",
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567294,
				tcgplayer: 241812
			}
		},
	],
}

export default card
