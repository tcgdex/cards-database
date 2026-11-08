import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [629],

	name: {
		'en-us': "Vullaby",
		'fr-fr': "Vostourno",
		'es-es': "Vullaby",
		'it-it': "Vullaby",
		'pt-br': "Vullaby",
		'de-de': "Skallyk"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pluck",
				'fr-fr': "Picore",
				'es-es': "Picoteo",
				'it-it': "Spennata",
				'pt-br': "Colher",
				'de-de': "Pflücker"
			},
			effect: {
				'en-us': "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
				'es-es': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
				'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
				'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
				'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
	hp: 60,
	types: ["Darkness"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It wears a bone to protect its rear. It often squabbles with others of its kind over particularly comfy bones."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458003,
				tcgplayer: 213213
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458003,
				tcgplayer: 213213
			}
		},
	],
}

export default card
