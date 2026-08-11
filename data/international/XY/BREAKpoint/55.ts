import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Sigilyph",
		'fr-fr': "Cryptéro",
		'es-es': "Sigilyph",
		'it-it': "Sigilyph",
		'pt-br': "Sigilyph",
		'de-de': "Symvolara"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		561,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Reflective Shield",
				'fr-fr': "Bouclier Réflexion",
				'es-es': "Escudo Reflectante",
				'it-it': "Scudo Riflettente",
				'pt-br': "Escudo Reflexivo",
				'de-de': "Reflektorschild"
			},
			effect: {
				'en-us': "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put 5 damage counters on the Attacking Pokémon.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même si ce Pokémon est mis K.O.), placez 5 marqueurs de dégâts sur le Pokémon Attaquant.",
				'es-es': "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si este Pokémon queda Fuera de Combate), pon 5 contadores de daño en el Pokémon Atacante.",
				'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon è danneggiato da un attacco, anche se viene messo KO, metti cinque segnalini danno sul Pokémon attaccante.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, se este Pokémon for danificado por um ataque (mesmo se esse Pokémon for Nocauteado), coloque 5 contadores de danos no Pokémon Atacante.",
				'de-de': "Wenn dieses Pokémon während des nächsten Zuges deines Gegners durch einen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 5 Schadensmarken auf das Angreifende Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Psy Report",
				'fr-fr': "Observation Psychique",
				'es-es': "Psicoinforme",
				'it-it': "Psicosoffiata",
				'pt-br': "Relatório Psíquico",
				'de-de': "Psycho-Offenlegung"
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand.",
				'fr-fr': "Votre adversaire montre sa main.",
				'es-es': "Tu rival enseña las cartas de su mano.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano.",
				'pt-br': "Seu oponente revela a própria mão.",
				'de-de': "Dein Gegner deckt seine Handkarten auf."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The guardians of an ancient city, they always fly the same route while keeping watch for invaders.",
	},

	thirdParty: {
		cardmarket: 288230,
		tcgplayer: 111596
	}
}

export default card
