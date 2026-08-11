import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [40],

	name: {
		'en-us': "Wigglytuff",
		'fr-fr': "Grodoudou",
		'es-es': "Wigglytuff",
		'it-it': "Wigglytuff",
		'pt-br': "Wigglytuff",
		'de-de': "Knuddeluff"
	},

	illustrator: "Lee HyunJung",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
		'de-de': "Pummeluff"
	},

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sleep Pulse",
				'fr-fr': "Pouls Dodo",
				'es-es': "Pulso Soñoliento",
				'it-it': "Sonnopulsar",
				'pt-br': "Pulso Sonolento",
				'de-de': "Schlafimpuls"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Smash",
				'fr-fr': "Double Broiement",
				'es-es': "Golpe Doble",
				'it-it': "Colpo Duplice",
				'pt-br': "Bordoada Dupla",
				'de-de': "Doppelstoß"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 90 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu."
			},
			damage: "90×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "When it gets angry, it inhales with all its might, and its body gradually inflates. Sometimes they can grow 20 times larger!"
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483219,
				tcgplayer: 219442
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483219,
				tcgplayer: 219442
			}
		},
	],
}

export default card
