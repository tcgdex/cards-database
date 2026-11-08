import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Illumise",
		'fr-fr': "Lumivole",
		'de-de': "Illumise"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [314],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Glowing Screen",
				'fr-fr': "Écran flamboyant",
				'de-de': "Leuchtender Schild"
			},
			effect: {
				'en-us': "As long as Volbeat is in play, any damage done to Illumise by attacks from Fighting Pokémon and Darkness Pokémon is reduced by 30. You can't reduce more than 30 damage even if there is more than 1 Volbeat in play.",
				'fr-fr': "Tant que Muciole est en jeu, tous dégâts infligés à Lumivole par des attaques de Pokémon  et  sont réduits de 30, même s'il y a plus d'un Muciole en jeu.",
				'de-de': "Solange Volbeat im Spiel ist, wird jeder Schaden, der Illumise durch Angriffe von -Pokémon und -Pokémon zugefügt wird, um 30 Schadenspunkte reduziert. Der Schaden wird maximal um 30 Schadenspunkte reduziert, auch wenn mehr als 1 Volbeat im Spiel ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Chaotic Noise",
				'fr-fr': "Bruit chaotique",
				'de-de': "Chaoslärm"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt verwirrt. Bei 'Zahl' schläft das Verteidigende Pokémon jetzt."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Pester",
				'fr-fr': "Abattre",
				'de-de': "Verfolgung"
			},
			effect: {
				'en-us': "If the Defending Pokémon is affected by a Special Condition, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 40 dégâts.",
				'de-de': "Falls das Verteidigende Pokémon von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275815,
				tcgplayer: 86264
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275815,
				tcgplayer: 86264
			}
		},
	],

}

export default card
