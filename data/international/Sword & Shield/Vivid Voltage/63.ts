import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

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

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras'Face",
				'es-es': "Destructor",
				'it-it': "Botta",
				'pt-br': "Pancada",
				'de-de': "Klaps"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mini-Metronome",
				'fr-fr': "Mini-Métronome",
				'es-es': "Minimetrónomo",
				'it-it': "Minimetronomo",
				'pt-br': "Mini-metrônomo",
				'de-de': "Mini-Metronom"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
				'es-es': "Lanza 1 moneda. Si sale cara, elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
				'it-it': "Lancia una moneta. Se esce testa, scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
				'pt-br': "Jogue 1 moeda. Se sair cara, escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
				'de-de': "Wirf 1 Münze. Wähle bei Kopf 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511735,
				tcgplayer: 226461
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511735,
				tcgplayer: 226461
			}
		},
	],
}

export default card
