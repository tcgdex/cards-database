import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Dark City",
		fr: "Sombreville",
		es: "Ciudad Oscura",
		it: "Città Oscura",
		pt: "Cidade Escura",
		de: "Dunkelstadt"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Les Pokémon Darkness de base en jeu (les vôtres et ceux de votre adversaire) n’ont pas de Coût de Retraite.",
		en: "Basic Darkness Pokémon in play (both yours and your opponent’s) have no Retreat Cost.",
		es: "Los Pokémon Darkness Básicos en juego (tanto tuyos como de tu rival) no tienen ningún Coste de Retirada.",
		it: "I Pokémon Base Darkness in gioco, sia tuoi che del tuo avversario, non hanno costo di ritirata.",
		pt: "Pokémon Darkness Básicos em jogo (seus e do seu oponente) não têm custo de Recuo.",
		de: "Darkness-Basis-Pokémon im Spiel (deine und die deines Gegners) haben keine Rückzugskosten."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 388747,
		tcgplayer: 195229
	}
}

export default card
