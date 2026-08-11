import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Emolga",
		'fr-fr': "Emolga",
		'es-es': "Emolga",
		'it-it': "Emolga",
		'pt-br': "Emolga",
		'de-de': "Emolga"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "Nagomi Nijo",

	attacks: [{
		name: {
			'en-us': "Thunder Shock",
			'fr-fr': "Éclair",
			'es-es': "Impactrueno",
			'it-it': "Tuonoshock",
			'pt-br': "Thunder Shock",
			'de-de': "Donnerschock"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,

	description: {
		'en-us': "As it flies, it scatters electricity around, so bird Pokémon keep their distance. That's why Emolga can keep all its food to itself."
	},

	dexId: [587],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574081,
				tcgplayer: 246900
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574081,
				tcgplayer: 246900
			}
		},
	],
}

export default card
