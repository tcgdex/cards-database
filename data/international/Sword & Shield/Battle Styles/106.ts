import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [680],
	set: Set,

	name: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'it-it': "Honedge",
		'pt-br': "Honedge",
		'de-de': "Gramokles"
	},

	attacks: [{
		name: {
			'en-us': "Cut Down",
			'fr-fr': "Retranchement",
			'es-es': "Recorte",
			'it-it': "Falciare",
			'pt-br': "Corte",
			'de-de': "Umsägen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "The two swords employ a strategy of rapidly alternating between offense and defense to bring down their prey."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545611,
				tcgplayer: 234196
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545611,
				tcgplayer: 234196
			}
		},
	],
}

export default card
