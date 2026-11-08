import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [854],

	name: {
		'en-us': "Sinistea",
		'fr-fr': "Théffroi",
		'es-es': "Sinistea",
		'it-it': "Sinistea",
		'pt-br': "Sinistea",
		'de-de': "Fatalitee"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 30,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Furtive Drop",
				'fr-fr': "Chute Furtive",
				'es-es': "Caída Furtiva",
				'it-it': "Lascito Furtivo",
				'pt-br': "Gota Furtiva",
				'de-de': "Hinterhältiger Fall"
			},
			effect: {
				'en-us': "Put 2 damage counters on your opponent's Active Pokémon.",
				'fr-fr': "Placez 2 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
				'es-es': "Pon 2 contadores de daño en el Pokémon Activo de tu rival.",
				'it-it': "Metti due segnalini danno sul Pokémon attivo del tuo avversario.",
				'pt-br': "Coloque 2 contadores de dano no Pokémon Ativo do seu oponente.",
				'de-de': "Lege 2 Schadensmarken auf das Aktive Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "This Pokémon is said to have been born when a lonely spirit possessed a cold, leftover cup of tea."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483289,
				tcgplayer: 219468
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483289,
				tcgplayer: 219468
			}
		},
	],
}

export default card
