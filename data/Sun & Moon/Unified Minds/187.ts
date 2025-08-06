import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Blizzard Town",
		fr: "Blizzarville",
		es: "Ciudad Ventisca",
		it: "Città Polare",
		pt: "Cidade de Nevasca",
		de: "Blizzania"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Les Pokémon auxquels il reste 40 PV ou moins (les vôtres et ceux de votre adversaire) ne peuvent pas attaquer.",
		en: "Pokémon with 40 HP or less remaining (both yours and your opponent’s) can’t attack.",
		es: "Los Pokémon a los que les queden 40 PS o menos (tanto tuyos como de tu rival) no pueden atacar.",
		it: "l Pokémon che hanno 40 PS o meno rimanenti, sia tuoi che del tuo avversario, non possono attaccare.",
		pt: "Pokémon com PS restante de 40 ou menos (seus e do seu oponente) não podem atacar.",
		de: "Pokémon (deine und die deines Gegners), deren verbleibende KP 40 oder weniger betragen, können nicht angreifen."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 388722,
		tcgplayer: 195217
	}
}

export default card
