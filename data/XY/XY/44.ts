import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
		es: "Voltorb",
		it: "Voltorb",
		pt: "Voltorb",
		de: "Voltobal"
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
				en: "Destiny Burst",
				fr: "Explo-Destin",
				es: "Explosión Destino",
				it: "Destinappagato",
				pt: "Rajada do Destino",
				de: "Schicksalssalve"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, flip a coin. If heads, put 5 damage counters on the Attacking Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu'il est mis K.O. par les dégâts d'une attaque de votre adversaire, lancez une pièce. Si c'est face, placez 5 marqueurs de dégâts sur le Pokémon Attaquant.",
				es: "Si este Pokémon es tu Pokémon Activo y queda Fuera de Combate por un ataque de tu rival, lanza 1 moneda. Si sala cara, pon 5 contadores de daño en el Pokémon Atacante.",
				it: "Se questo Pokémon è il tuo Pokémon attivo e viene messo KO dai danni inflitti da un attacco del tuo avversario, lancia una moneta. Se esce testa, metti cinque segnalini danno sul Pokémon attaccante.",
				pt: "Se este Pokémon for seu Pokémon Ativo e ele for Nocauteado por danos de um ataque do oponente, jogue uma moeda. Se sair cara, coloque 5 contadores de danos no Pokémon Atacante.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch Schaden eines gegnerischen Angriffs kampfunfähig wird, wirf 1 Münze. Lege bei \"Kopf\" 5 Schadensmarken auf das Angreifende Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				es: "Desenrollar",
				it: "Rotolamento",
				pt: "Rolagem",
				de: "Walzer"
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



}

export default card
