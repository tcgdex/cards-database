import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Elekid",
		'fr-fr': "Elekid",
		'de-de': "Elekid"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [239],

	hp: 30,

	types: [
		"Lightning"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sweet Sleeping Face",
				'fr-fr': "Joli visage endormi",
				'de-de': "Niedliches Schlafgesicht"
			},
			effect: {
				'en-us': "As long as Elekid is Asleep, prevent all damage done to Elekid by attacks.",
				'fr-fr': "Tant qu’Elekid est Endormi, empêchez tous les dégâts qui lui sont infligés par des attaques.",
				'de-de': "Solange Elekid schläft, verhindere allen Schaden, der Elekid durch Angriffe zugefügt wird."
			}
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Sparking Ball",
				'fr-fr': "Boule étincelante",
				'de-de': "Funkenball"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance. Elekid is now Asleep.",
				'fr-fr': "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance. Elekid est maintenant Endormi.",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 20 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert. Elekid schläft jetzt."
			},

		},
	],

	retreat: 0,

	description: {
		'en-us': "Even in the most vicious storm, this Pokémon plays happily if thunder rumbles in the sky."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85172,
				cardmarket: 279551
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279551,
				tcgplayer: 85172
			}
		},
	],

}

export default card
