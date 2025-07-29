import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Pancham",
		fr: "Pandespiègle",
		es: "Pancham",
		it: "Pancham",
		pt: "Pancham",
		de: "Pam-Pam"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		674,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Arm Thrust",
				fr: "Cogne",
				es: "Empujón",
				it: "Sberletese",
				pt: "Golpe de Braço",
				de: "Armstoß"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from your opponent’s Active Pokémon. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 369011
	}
}

export default card
