import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [35],

	name: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'es-es': "Clefairy",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
		'de-de': "Piepi"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Shining Fingers",
				'fr-fr': "Doigts Brillants",
				'es-es': "Dedos Brillantes",
				'it-it': "Dita Lucenti",
				'pt-br': "Dedos Brilhantes",
				'de-de': "Leuchtende Finger"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Magical Shot",
				'fr-fr': "Coup Magique",
				'es-es': "Disparo Mágico",
				'it-it': "Magicolpo",
				'pt-br': "Tiro Mágico",
				'de-de': "Magischer Schuss"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 60,
	types: ["Psychic"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457788,
				tcgplayer: 213160
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457788,
				tcgplayer: 213160
			}
		},
	],
}

export default card
