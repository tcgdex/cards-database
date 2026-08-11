import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'es-es': "Phanpy",
		'it-it': "Phanpy",
		'pt-br': "Phanpy",
		'de-de': "Phanpy"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		231,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Endure",
				'fr-fr': "Ténacité",
				'es-es': "Aguante",
				'it-it': "Tenere Duro",
				'pt-br': "Resistência",
				'de-de': "Ausdauer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, if this Pokémon would be Knocked Out by damage from an attack during your opponent’s next turn, it is not Knocked Out, and its remaining HP becomes 10.",
				'fr-fr': "Lancez une pièce. Si c’est face, et si ce Pokémon doit être mis K.O. par les dégâts d’une attaque pendant le prochain tour de votre adversaire, il n’est pas mis K.O., mais il n’a plus que 10 PV.",
				'es-es': "Lanza 1 moneda. Si sale cara, si este Pokémon fuese a quedar Fuera de Combate por el daño de un ataque durante el próximo turno de tu rival, este Pokémon no queda Fuera de Combate, y sus PS restantes pasan a ser 10.",
				'it-it': "Lancia una moneta. Se esce testa, se questo Pokémon sta per essere messo KO dai danni di un attacco durante il prossimo turno del tuo avversario, non viene messo KO e i suoi PS rimanenti diventano 10.",
				'pt-br': "Jogue 1 moeda. Se sair cara, se este Pokémon estiver prestes a ser Nocauteado pelo dano de um ataque durante a próxima vez de jogar do seu oponente, ele não será Nocauteado e o PS restante dele será 10.",
				'de-de': "Wirf 1 Münze. Bei Kopf, wenn dieses Pokémon während des nächsten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig würde, wird es nicht kampfunfähig und seine verbleibenden KP sind gleich 10."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is strong despite its compact size. It can easily pick up and carry an adult human on its back.",
	},

	thirdParty: {
		cardmarket: 361317,
		tcgplayer: 170894
	}
}

export default card
