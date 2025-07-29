import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Elekid",
		fr: "Elekid",
		de: "Elekid"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		239,
	],

	hp: 30,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sweet Sleeping Face",
				fr: "Joli visage endormi",
				de: "Niedliches Schlafgesicht"
			},
			effect: {
				en: "As long as Elekid is Asleep, prevent all damage done to Elekid by attacks.",
				fr: "Tant qu’Elekid est Endormi, empêchez tous les dégâts qui lui sont infligés par des attaques.",
				de: "Solange Elekid schläft, verhindere allen Schaden, der Elekid durch Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Sparking Ball",
				fr: "Boule étincelante",
				de: "Funkenball"
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon. This attack does 20 damage to that Pokémon. This attack’s damage isn’t affected by Weakness or Resistance. Elekid is now Asleep.",
				fr: "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance. Elekid est maintenant Endormi.",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 20 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert. Elekid schläft jetzt."
			},

		},
	],

	retreat: 0,

	description: {
		en: "Even in the most vicious storm, this Pokémon plays happily if thunder rumbles in the sky."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279551
	}
}

export default card
