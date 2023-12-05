import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Shining Steelix",
		fr: "Steelix brillant",
		de: "Schimmerndes Stahlos"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 90,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Fighting",
				"Fighting",
			],

			name: {
				en: "Crushing Earth",
				fr: "Écrase-terre",
				de: "Zermalmende Erde"
			},

			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each Benched Pokémon (yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.) If tails, this attack does nothing. Either way, Shining Steelix can't attack during your next turn.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chaque Pokémon du Banc (le vôtre et celui de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.) Si c'est pile, cette attaque ne fait rien. Dans tous les cas, Steelix brillant ne peut pas attaquer pendant votre prochain tour.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff allen Pokémon auf der Bank 10 Schadenspunkte zu (deinen und denen deines Gegners). (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Bei \"Zahl\" hat dieser Angriff keine Auswirkungen. Unabhängig davon, kann Schimmerndes Stahlos während deines nächsten Zuges nicht angreifen."
			},

			damage: 80
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	description: {
		fr: "Si un Onix vit au moins 100 ans, sa peau durcit et devient peu à peu plus dure que le diamant."
	}
}

export default card
