import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Igglybuff",
		'fr-fr': "Toudoudou",
		'de-de': "Fluffeluff"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [174],

	hp: 30,

	types: [
		"Colorless"
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
				'en-us': "As long as Igglybuff is Asleep, prevent all damage done to Igglybuff by attacks.",
				'fr-fr': "Tant que Toudoudou reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
				'de-de': "Solange Fluffeluff schläft, verhindere allen Schaden, der Fluffeluff durch Angriffe zugefügt wird."
			}
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Graffiti",
				'fr-fr': "Graffiti",
				'de-de': "Graffiti"
			},
			effect: {
				'en-us': "Igglybuff is now Asleep. During your opponent's next turn, the attack cost of each of the Defending Pokémon's attacks is Colorless more.",
				'fr-fr': "Toudoudou est maintenant Endormi. Au prochain tour de votre adversaire, le coût de l’attaque de chaque Pokémon Défenseur est plus élevé de Colorless.",
				'de-de': "Fluffeluff schläft jetzt. Während des nächsten Zuges deines Gegners kosten die Angriffe jedes Verteidigenden Pokémons  mehr."
			},

		},
	],

	retreat: 0,

	description: {
		'en-us': "Its extremely flexible and elastic body makes it bounce continuously—anytime, anywhere."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86263,
				cardmarket: 279016
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86263,
				cardmarket: 279016
			}
		},
	],

}

export default card
