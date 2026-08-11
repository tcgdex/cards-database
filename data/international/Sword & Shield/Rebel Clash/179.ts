import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Milotic V",
		'fr-fr': "Milobellus V",
		'es-es': "Milotic V",
		'it-it': "Milotic V",
		'pt-br': "Milotic V",
		'de-de': "Milotic V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [350],
	set: Set,

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Impact",
				'fr-fr': "Impact Aqua",
				'es-es': "Impacto Aqua",
				'it-it': "Acquimpatto",
				'pt-br': "Impacto Aqua",
				'de-de': "Aqua-Einschlag"
			},
			effect: {
				'en-us': "This attack does 50 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 50 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 50 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hypno Splash",
				'fr-fr': "Hypnoplouf",
				'es-es': "Salpicadura Hipnótica",
				'it-it': "Ipnospruzzo",
				'pt-br': "Explosão Hipnótica",
				'de-de': "Hypnospritzer"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 210,
	types: ["Water"],
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 458268,
				tcgplayer: 213122
			}
		},
	],
}

export default card
