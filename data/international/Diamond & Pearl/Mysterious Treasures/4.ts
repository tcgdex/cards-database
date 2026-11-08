import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Azelf",
		'fr-fr': "Créfadet",
		'de-de': "Tobutz"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		482,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Downer Material",
				'fr-fr': "Matériel immobilisateur",
				'de-de': "Beruhigungsmittel"
			},
			effect: {
				'en-us': "If you have Uxie and Mesprit in play, the attack cost of each of your opponent's Basic Pokémon's attack is Colorless more. You can't use more than 1 Downer Material Poké-Body each turn.",
				'fr-fr': "Si vous avez Créhelf ou Créfollet en jeu, le Coût d'attaque de l'attaque de chacun des Pokémon de base de votre adversaire est de Colorless de plus. Vous ne pouvez pas utiliser plus d'1 Poké-Body Matériel immobilisateur par tour.",
				'de-de': "Wenn du Selfe und Vesprit im Spiel hast, kosten die Angriffe der Basis-Pokémon deines Gegners 1 zusätzliche . Du kannst nicht mehr als 1 Beruhigungsmittel Poké-Body pro Zug einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Bind Pulse",
				'fr-fr': "Vibration ligotante",
				'de-de': "Fessel-Impuls"
			},
			effect: {
				'en-us': "During your opponent's next turn, your opponent can't attach any Special Energy cards from his or her hand to any of his or her Pokémon.",
				'fr-fr': "Lors du prochain tour de votre adversaire, celui-ci ne peut pas attacher de cartes Énergie Spéciale de sa main à ses Pokémon.",
				'de-de': "Dein Gegner kann in seinem nächsten Zug keine Spezialenergiekarten von seiner Hand an seine Pokémon anlegen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Known as \"The Being of Willpower.\" It sleeps at the bottom of a lake to keep the world in balance.",
		'fr-fr': "On l'appelle \"être de la volonté\". Il dort au fond d'un lac pour maintenir l'équilibre du monde."
	},

	thirdParty: {
		cardmarket: 277633,
		tcgplayer: 83674
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
		{
			type: "holo",
			stamp: ["mychael-bryan"]
		}
	]
}

export default card
