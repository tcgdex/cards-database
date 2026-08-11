import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Espeon",
		'fr-fr': "Mentali",
		'de-de': "Psiana"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [196],

	hp: 100,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Evolution Memories",
				'fr-fr': "Souvenirs d’Évolution",
				'de-de': "Entwicklungserinnerungen"
			},
			effect: {
				'en-us': "Espeon can use the attacks of all Pokémon you have in play that evolve from Eevee as its own. (You still need the necessary Energy to use each attack.)",
				'fr-fr': "Mentali peut réutiliser les attaques de tous les Pokémon que vous avez joués et qui sont une évolution d’Evoli. (Vous devrez néanmoins avoir les Énergies nécessaires pour utiliser chaque attaque.)",
				'de-de': "Psiana kann die Angriffe aller Pokémon, die du im Spiel hast und die sich aus Evoli entwickeln, wie eigene Angriffe verwenden. (Du benötigst dazu die für jeden der Angriffe erforderlichen Energien.)"
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Solar Ray",
				'fr-fr': "Rayonnement solaire",
				'de-de': "Sonnenstrahlen"
			},
			effect: {
				'en-us': "Remove 1 damage counter from each of your Pokémon.",
				'fr-fr': "Retirez 1 marqueur de dégât à chacun de vos Pokémon.",
				'de-de': "Entferne 1 Schadensmarke von jedem deiner Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	suffix: "Prime",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279334,
				tcgplayer: 85323
			}
		},
	],
}

export default card
