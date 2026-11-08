import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'it-it': "Meditite",
		'pt-br': "Meditite",
		'de-de': "Meditie"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		307,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Bide",
				'fr-fr': "Patience",
				'es-es': "Venganza",
				'it-it': "Pazienza",
				'pt-br': "Aguardar",
				'de-de': "Geduld"
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
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Kick",
				'fr-fr': "Koud’Pied",
				'es-es': "Patada",
				'it-it': "Calcio",
				'pt-br': "Chute",
				'de-de': "Tritt"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It eats just one berry a day. By enduring hunger, its spirit is tempered and made sharper.",
	},

	thirdParty: {
		cardmarket: 361321,
		tcgplayer: 170898
	}
}

export default card
