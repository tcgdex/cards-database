import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Venture Bomb",
		fr: "Bombe Risquée de la Team Rocket",
		de: "Team Rockets Wagnisbombe",
		it: "Bomba Azzardata del Team Rocket",
		es: "Bomba Arriesgada del Team Rocket",
		pt: "Bomba de Risco da Equipe Rocket",
		'es-mx': "Bomba Riesgosa del Equipo Rocket"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Flip a coin. If heads, put 2 damage counters on 1 of your opponent's Pokémon. If tails, put 2 damage counters on your Active Pokémon.",
		fr: "Lancez une pièce. Si c'est face, placez 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire. Si c'est pile, placez 2 marqueurs de dégâts sur votre Pokémon Actif.",
		de: "Wirf 1 Münze. Lege bei Kopf 2 Schadensmarken auf 1 Pokémon deines Gegners. Lege bei Zahl 2 Schadensmarken auf dein Aktives Pokémon.",
		it: "Lancia una moneta. Se esce testa, metti due segnalini danno su uno dei Pokémon del tuo avversario. Se esce croce, metti due segnalini danno sul tuo Pokémon attivo.",
		es: "Lanza 1 moneda. Si sale cara, pon 2 contadores de daño en uno de los Pokémon de tu rival. Si sale cruz, pon 2 contadores de daño en tu Pokémon Activo.",
		pt: "Jogue uma moeda. Se sair cara, coloque 2 contadores de dano em 1 dos Pokémon do seu oponente. Se sair coroa, coloque 2 contadores de dano no seu Pokémon Ativo.",
		'es-mx': "Lanza 1 moneda. Si sale cara, pon 2 contadores de daño en 1 de los Pokémon de tu rival. Si sale cruz, pon 2 contadores de daño en tu Pokémon Activo."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
