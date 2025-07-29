import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier",
		es: "Metapod",
		it: "Metapod",
		pt: "Metapod",
		de: "Safcon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		11,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
		es: "Caterpie",
		it: "Caterpie",
		pt: "Caterpie",
		de: "Raupy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stiffen",
				fr: "Raidissement",
				es: "Endurecimiento",
				it: "Indurimento",
				pt: "Fortificar",
				de: "Verhärten"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 40 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 40 (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 40, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 40 (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 40 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Stun Spore",
				fr: "Para-Spore",
				es: "Paralizador",
				it: "Paralizzante",
				pt: "Esporos Atordoantes",
				de: "Stachelspore"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 293361
	}
}

export default card
