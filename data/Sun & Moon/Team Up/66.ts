import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		es: "Mr. Mime",
		it: "Mr. Mime",
		pt: "Mr. Mime",
		de: "Pantimos"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		122,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Scoop-Up Block",
				fr: "Rappel Interdit",
				es: "Bloqueo Levante",
				it: "Blocco Recupero",
				pt: "Bloqueio de Recolhida",
				de: "Anziehungsblockade"
			},
			effect: {
				en: "Your opponent’s Pokémon that have any damage counters on them, and any cards attached to those Pokémon, can’t be put into your opponent’s hand.",
				fr: "Les Pokémon de votre adversaire qui ont des marqueurs de dégâts, et toutes les cartes qui sont attachées à ces Pokémon, ne peuvent pas être mis dans la main de votre adversaire.",
				es: "Los Pokémon de tu rival que tengan algún contador de daño sobre ellos y las cartas unidas a esos Pokémon no pueden ponerse en la mano de tu rival.",
				it: "I Pokémon del tuo avversario che hanno dei segnalini danno e tutte le carte a essi assegnate non possono essere aggiunti alle carte che ha in mano.",
				pt: "Os Pokémon do seu oponente que tiverem algum contador de dano neles e quaisquer cartas ligadas àqueles Pokémon não poderão ser colocados na mão do seu oponente.",
				de: "Die Pokémon deines Gegners, auf denen mindestens 1 Schadensmarke liegt, und alle an jene Pokémon angelegten Karten können nicht auf die Hand deines Gegners genommen werden."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psy Bolt",
				fr: "Choc Mental",
				es: "Rayo Psi",
				it: "Psico",
				pt: "Raio Psíquico",
				de: "Mentale Blockade"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
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
