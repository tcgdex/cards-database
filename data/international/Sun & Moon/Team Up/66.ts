import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Mr. Mime",
		'fr-fr': "M. Mime",
		'es-es': "Mr. Mime",
		'it-it': "Mr. Mime",
		'pt-br': "Mr. Mime",
		'de-de': "Pantimos"
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
				'en-us': "Scoop-Up Block",
				'fr-fr': "Rappel Interdit",
				'es-es': "Bloqueo Levante",
				'it-it': "Blocco Recupero",
				'pt-br': "Bloqueio de Recolhida",
				'de-de': "Anziehungsblockade"
			},
			effect: {
				'en-us': "Your opponent’s Pokémon that have any damage counters on them, and any cards attached to those Pokémon, can’t be put into your opponent’s hand.",
				'fr-fr': "Les Pokémon de votre adversaire qui ont des marqueurs de dégâts, et toutes les cartes qui sont attachées à ces Pokémon, ne peuvent pas être mis dans la main de votre adversaire.",
				'es-es': "Los Pokémon de tu rival que tengan algún contador de daño sobre ellos y las cartas unidas a esos Pokémon no pueden ponerse en la mano de tu rival.",
				'it-it': "I Pokémon del tuo avversario che hanno dei segnalini danno e tutte le carte a essi assegnate non possono essere aggiunti alle carte che ha in mano.",
				'pt-br': "Os Pokémon do seu oponente que tiverem algum contador de dano neles e quaisquer cartas ligadas àqueles Pokémon não poderão ser colocados na mão do seu oponente.",
				'de-de': "Die Pokémon deines Gegners, auf denen mindestens 1 Schadensmarke liegt, und alle an jene Pokémon angelegten Karten können nicht auf die Hand deines Gegners genommen werden."
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
				'en-us': "Psy Bolt",
				'fr-fr': "Choc Mental",
				'es-es': "Rayo Psi",
				'it-it': "Psico",
				'pt-br': "Raio Psíquico",
				'de-de': "Mentale Blockade"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
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

	description: {
		'en-us': "Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.",
	},

	thirdParty: {
		cardmarket: 368996,
		tcgplayer: 183844
	}
}

export default card
