import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Greedent",
		'fr-fr': "Rongrigou",
		'es-es': "Greedent",
		'it-it': "Greedent",
		'pt-br': "Greedent",
		'de-de': "Schlaraffel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [820],
	set: Set,
	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Skwovet",
		'fr-fr': "Rongourmand",
		'es-es': "Skwovet",
		'it-it': "Skwovet",
		'pt-br': "Skwovet",
		'de-de': "Raffel"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scrape Off",
				'fr-fr': "Racler",
				'es-es': "Raspadura",
				'it-it': "Raschiare",
				'pt-br': "Raspar o Tacho",
				'de-de': "Wegkratzen"
			},
			effect: {
				'en-us': "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
				'es-es': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
				'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
				'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
				'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smack and Run",
				'fr-fr': "Gifle et Fuite",
				'es-es': "Abofetear y Correr",
				'it-it': "Sberlafuga",
				'pt-br': "Esbofetear e Correr",
				'de-de': "Ohrfeigen und Abhauen"
			},
			effect: {
				'en-us': "Put this Pokémon and all attached cards into your hand.",
				'fr-fr': "Ajoutez à votre main ce Pokémon et toutes les cartes attachées.",
				'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
				'it-it': "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
				'pt-br': "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão.",
				'de-de': "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It stashes berries in its tail—so many berries that they fall out constantly. But this Pokémon is a bit slow-witted, so it doesn't notice the loss."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483644,
				tcgplayer: 219367
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483644,
				tcgplayer: 219367
			}
		},
	],
}

export default card
