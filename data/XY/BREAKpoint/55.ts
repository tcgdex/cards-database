import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
		es: "Sigilyph",
		it: "Sigilyph",
		pt: "Sigilyph",
		de: "Symvolara"
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
				en: "Reflective Shield",
				fr: "Bouclier Réflexion",
				es: "Escudo Reflectante",
				it: "Scudo Riflettente",
				pt: "Escudo Reflexivo",
				de: "Reflektorschild"
			},
			effect: {
				en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put 5 damage counters on the Attacking Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même si ce Pokémon est mis K.O.), placez 5 marqueurs de dégâts sur le Pokémon Attaquant.",
				es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si este Pokémon queda Fuera de Combate), pon 5 contadores de daño en el Pokémon Atacante.",
				it: "Durante il prossimo turno del tuo avversario, se questo Pokémon è danneggiato da un attacco, anche se viene messo KO, metti cinque segnalini danno sul Pokémon attaccante.",
				pt: "Durante a próxima vez de jogar do seu oponente, se este Pokémon for danificado por um ataque (mesmo se esse Pokémon for Nocauteado), coloque 5 contadores de danos no Pokémon Atacante.",
				de: "Wenn dieses Pokémon während des nächsten Zuges deines Gegners durch einen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 5 Schadensmarken auf das Angreifende Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psy Report",
				fr: "Observation Psychique",
				es: "Psicoinforme",
				it: "Psicosoffiata",
				pt: "Relatório Psíquico",
				de: "Psycho-Offenlegung"
			},
			effect: {
				en: "Your opponent reveals his or her hand.",
				fr: "Votre adversaire montre sa main.",
				es: "Tu rival enseña las cartas de su mano.",
				it: "Il tuo avversario mostra le carte che ha in mano.",
				pt: "Seu oponente revela a própria mão.",
				de: "Dein Gegner deckt seine Handkarten auf."
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

	thirdParty: {
		cardmarket: 288230
	}
}

export default card
