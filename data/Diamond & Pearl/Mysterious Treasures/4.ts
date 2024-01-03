import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Azelf",
		fr: "Créfadet",
		de: "Tobutz"
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
				en: "Downer Material",
				fr: "Matériel immobilisateur",
				de: "Beruhigungsmittel"
			},
			effect: {
				en: "If you have Uxie and Mesprit in play, the attack cost of each of your opponent's Basic Pokémon's attack is Colorless more. You can't use more than 1 Downer Material Poké-Body each turn.",
				fr: "Si vous avez Créhelf ou Créfollet en jeu, le Coût d'attaque de l'attaque de chacun des Pokémon de base de votre adversaire est de Colorless de plus. Vous ne pouvez pas utiliser plus d'1 Poké-Body Matériel immobilisateur par tour.",
				de: "Wenn du Selfe und Vesprit im Spiel hast, kosten die Angriffe der Basis-Pokémon deines Gegners 1 zusätzliche . Du kannst nicht mehr als 1 Beruhigungsmittel Poké-Body pro Zug einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Bind Pulse",
				fr: "Vibration ligotante",
				de: "Fessel-Impuls"
			},
			effect: {
				en: "During your opponent's next turn, your opponent can't attach any Special Energy cards from his or her hand to any of his or her Pokémon.",
				fr: "Lors du prochain tour de votre adversaire, celui-ci ne peut pas attacher de cartes Énergie Spéciale de sa main à ses Pokémon.",
				de: "Dein Gegner kann in seinem nächsten Zug keine Spezialenergiekarten von seiner Hand an seine Pokémon anlegen."
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

	description: {
		fr: "On l'appelle \"être de la volonté\". Il dort au fond d'un lac pour maintenir l'équilibre du monde."
	}
}

export default card
