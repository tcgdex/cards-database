import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [616],
	set: Set,

	name: {
		'en-us': "Shelmet",
		'fr-fr': "Escargaume",
		'es-es': "Shelmet",
		'de-de': "Schnuthelm",
		'it-it': "Shelmet",
		'pt-br': "Shelmet",
		'es-mx': "Shelmet"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Shell Smack",
			'fr-fr': "Claque Coquille",
			'es-es': "Bofetón Caparazón",
			'de-de': "Muschelklaps",
			'it-it': "Gusciosberla",
			'pt-br': "Golpe de Concha",
			'es-mx': "Cachetazo Acorazado"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evita todo el daño infligido por ataques a este Pokémon."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",
	illustrator: "Toshinao Aoki",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817164,
				tcgplayer: 623439
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817164,
				tcgplayer: 623439
			}
		},
	],
}

export default card
