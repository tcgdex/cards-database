import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "N's Castle",
		fr: "Palais de N",
		es: "Palacio de N",
		de: "Schloss von N",
		it: "Palazzo di N",
		pt: "Castelo do N",
		'es-mx': "Castillo de N"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "N's Pokémon in play (both yours and your opponent's) have no Retreat Cost.",
		fr: "Les Pokémon de N en jeu (les vôtres et ceux de votre adversaire) n'ont pas de Coût de Retraite.",
		es: "Los Pokémon de N en juego (tanto tuyos como de tu rival) no tienen ningún Coste de Retirada.",
		de: "Ns Pokémon im Spiel (deine und die deines Gegners) haben keine Rückzugskosten.",
		it: "I Pokémon di N in gioco, sia tuoi che del tuo avversario, non hanno costo di ritirata.",
		pt: "Pokémon do N em jogo (seus e do seu oponente) não têm custo de Recuo.",
		'es-mx': "Los Pokémon de N en juego (tanto tuyos como de tu rival) no tienen ningún Costo de Retirada."
	},

	trainerType: "Stadium",
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
