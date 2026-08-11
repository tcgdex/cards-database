import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Blizzard Town",
		'fr-fr': "Blizzarville",
		'es-es': "Ciudad Ventisca",
		'it-it': "Città Polare",
		'pt-br': "Cidade de Nevasca",
		'de-de': "Blizzania"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Les Pokémon auxquels il reste 40 PV ou moins (les vôtres et ceux de votre adversaire) ne peuvent pas attaquer.",
		'en-us': "Pokémon with 40 HP or less remaining (both yours and your opponent’s) can’t attack.",
		'es-es': "Los Pokémon a los que les queden 40 PS o menos (tanto tuyos como de tu rival) no pueden atacar.",
		'it-it': "l Pokémon che hanno 40 PS o meno rimanenti, sia tuoi che del tuo avversario, non possono attaccare.",
		'pt-br': "Pokémon com PS restante de 40 ou menos (seus e do seu oponente) não podem atacar.",
		'de-de': "Pokémon (deine und die deines Gegners), deren verbleibende KP 40 oder weniger betragen, können nicht angreifen."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 388722,
		tcgplayer: 195217
	}
}

export default card
