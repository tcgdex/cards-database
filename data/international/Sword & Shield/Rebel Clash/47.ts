import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Galarian Darumaka",
		'fr-fr': "Darumarond de Galar",
		'es-es': "Darumaka de Galar",
		'it-it': "Darumaka di Galar",
		'pt-br': "Darumaka de Galar",
		'de-de': "Galar-Flampion"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [554],
	set: Set,

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Punch",
				'fr-fr': "Poing Glace",
				'es-es': "Puño Hielo",
				'it-it': "Gelopugno",
				'pt-br': "Soco de Gelo",
				'de-de': "Eishieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 80,
	types: ["Water"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It lived in snowy areas for so long that its fire sac cooled off and atrophied. It now has an organ that generates cold instead."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457678,
				tcgplayer: 213126
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457678,
				tcgplayer: 213126
			}
		},
	],
}

export default card
