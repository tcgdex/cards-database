import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'es-es': "Voltorb",
		'it-it': "Voltorb",
		'pt-br': "Voltorb",
		'de-de': "Voltobal"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Destiny Burst",
				'fr-fr': "Explo-Destin",
				'es-es': "Explosión Destino",
				'it-it': "Destinappagato",
				'pt-br': "Rajada do Destino",
				'de-de': "Schicksalssalve"
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, flip a coin. If heads, put 5 damage counters on the Attacking Pokémon.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif et qu'il est mis K.O. par les dégâts d'une attaque de votre adversaire, lancez une pièce. Si c'est face, placez 5 marqueurs de dégâts sur le Pokémon Attaquant.",
				'es-es': "Si este Pokémon es tu Pokémon Activo y queda Fuera de Combate por un ataque de tu rival, lanza 1 moneda. Si sala cara, pon 5 contadores de daño en el Pokémon Atacante.",
				'it-it': "Se questo Pokémon è il tuo Pokémon attivo e viene messo KO dai danni inflitti da un attacco del tuo avversario, lancia una moneta. Se esce testa, metti cinque segnalini danno sul Pokémon attaccante.",
				'pt-br': "Se este Pokémon for seu Pokémon Ativo e ele for Nocauteado por danos de um ataque do oponente, jogue uma moeda. Se sair cara, coloque 5 contadores de danos no Pokémon Atacante.",
				'de-de': "Wenn dieses Pokémon dein Aktives Pokémon ist und durch Schaden eines gegnerischen Angriffs kampfunfähig wird, wirf 1 Münze. Lege bei \"Kopf\" 5 Schadensmarken auf das Angreifende Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'es-es': "Desenrollar",
				'it-it': "Rotolamento",
				'pt-br': "Rolagem",
				'de-de': "Walzer"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It was discovered when Poké Balls were introduced. It is said that there is some connection.",
	},

	thirdParty: {
		cardmarket: 281381,
		tcgplayer: 90425
	}
}

export default card
