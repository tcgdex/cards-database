import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew",
		es: "Mew",
		it: "Mew",
		pt: "Mew",
		de: "Mew"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Neutral Shield",
				fr: "Bouclier Neutre",
				es: "Escudo Neutral",
				it: "Scudo Neutralizzante",
				pt: "Escudo Neutro",
				de: "Neutralisierendes Schild"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent’s Evolution Pokémon.",
				fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon Évolutifs de votre adversaire.",
				es: "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por los Pokémon Evolución de tu rival.",
				it: "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon dai Pokémon Evoluzione del tuo avversario.",
				pt: "Previne todos os efeitos de ataques, inclusive danos, causados a este Pokémon pelo Pokémon de Evolução do seu oponente.",
				de: "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon durch Entwicklungs-Pokémon deines Gegners zugefügt werden."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psy Bolt",
				fr: "Choc Mental",
				es: "Rayo Psi",
				it: "Psico",
				pt: "Raio Psíquico",
				de: "Konfusion"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
