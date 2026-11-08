import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		'en-us': "N's Castle",
		'fr-fr': "Palais de N",
		'es-es': "Palacio de N",
		'de-de': "Schloss von N",
		'it-it': "Palazzo di N",
		'pt-br': "Castelo do N",
		'es-mx': "Castillo de N"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "N's Pokémon in play (both yours and your opponent's) have no Retreat Cost.",
		'fr-fr': "Les Pokémon de N en jeu (les vôtres et ceux de votre adversaire) n'ont pas de Coût de Retraite.",
		'es-es': "Los Pokémon de N en juego (tanto tuyos como de tu rival) no tienen ningún Coste de Retirada.",
		'de-de': "Ns Pokémon im Spiel (deine und die deines Gegners) haben keine Rückzugskosten.",
		'it-it': "I Pokémon di N in gioco, sia tuoi che del tuo avversario, non hanno costo di ritirata.",
		'pt-br': "Pokémon do N em jogo (seus e do seu oponente) não têm custo de Recuo.",
		'es-mx': "Los Pokémon de N en juego (tanto tuyos como de tu rival) no tienen ningún Costo de Retirada."
	},

	trainerType: "Stadium",
	regulationMark: "I",
	illustrator: "AYUMI ODASHIMA",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817304,
				tcgplayer: 623579
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817304,
				tcgplayer: 623579
			}
		},
		{
			type: 'normal',
			stamp: ['player-rewards-program']
		}
	],
}

export default card
