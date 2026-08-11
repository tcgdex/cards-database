import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
		'es-es': "Seedot",
		'it-it': "Seedot",
		'pt-br': "Seedot",
		'de-de': "Samurzel"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		273,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
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
				'en-us': "Flip a coin. If heads, if this Pokémon would be Knocked Out by damage from an attack during your opponent's next turn, it is not Knocked Out and its remaining HP becomes 10 instead.",
				'fr-fr': "Lancez une pièce. Si c'est face, et si ce Pokémon doit être mis K.O. par les dégâts d'une attaque pendant le prochain tour de votre adversaire, il n'est pas mis K.O. mais il ne lui reste que 10 PV.",
				'es-es': "Lanza 1 moneda. Si sale cara, si este Pokémon fuese a quedar Fuera de Combate por el daño de un ataque durante el próximo turno de tu rival, este Pokémon no queda Fuera de Combate, y sus PS restantes pasan a ser 10.",
				'it-it': "Lancia una moneta. Se esce testa, se questo Pokémon sta per essere messo KO dai danni di un attacco durante il prossimo turno del tuo avversario, non viene messo KO e i suoi PS rimanenti diventano 10.",
				'pt-br': "Jogue uma moeda. Se sair cara, se este Pokémon estiver prestes a ser Nocauteado por danos causados por um ataque durante a próxima vez de jogar do seu oponente, ele não será Nocauteado e o seu PS restante se tornará 10.",
				'de-de': "Wirf 1 Münze. Würde dieses Pokémon während des nächsten Zuges deines Gegners durch Schaden eines Angriffs kampfunfähig, wird es dies bei \"Kopf\" nicht und behält stattdessen 10 KP."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it dangles from a tree branch, it looks just like an acorn. It enjoys scaring other Pokémon.",
	},

	thirdParty: {
		cardmarket: 291516,
		tcgplayer: 120998
	}
}

export default card
