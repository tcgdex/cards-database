import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Machamp",
		'fr-fr': "Mackogneur",
		'de-de': "Machomei"
	},

	illustrator: "Shizurow",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [68],

	hp: 150,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Fighting Tag",
				'fr-fr': "Relève guerrière",
				'de-de': "Aufforderung zum Kampf"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Machamp is on your Bench, you may move all Fighting Energy attached to your Active Pokémon to Machamp. If you do, switch Machamp with your Active Pokémon.",
				'fr-fr': "Une fois pendant votre tour (avant votre attaque), si Mackogneur est sur votre Banc, vous pouvez lui attribuer toutes les cartes Énergie Fighting attachées à votre Pokémon Actif. Dans ce cas, échangez Mackogneur avec votre Pokémon Actif.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn sich Machomei auf deiner Bank befindet, alle an dein Aktives Pokémon angelegten -Energien an Machomei anlegen. Wenn du das machst, tausche Machomei mit deinem Aktiven Pokémon aus."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crushing Punch",
				'fr-fr': "Poing dévastateur",
				'de-de': "Schmetterhieb"
			},
			effect: {
				'en-us': "Discard a Special Energy card attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une carte Énergie Spéciale attachée au Pokémon Défenseur.",
				'de-de': "Lege 1 Spezialenergiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Champ Buster",
				'fr-fr': "Explos’tout",
				'de-de': "Champ-Sprenger"
			},
			effect: {
				'en-us': "Does 100 damage plus 10 more damage for each of your Benched Pokémon that has any damage counters on it.",
				'fr-fr': "Inflige 100 dégâts plus 10 dégâts supplémentaires pour chacun de vos Pokémon de Banc ayant des marqueurs de dégât.",
				'de-de': "Dieser Angriff fügt 100 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Pokémon auf deiner Bank, auf dem bereits mindestens 1 Schadensmarke liegt, zu."
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "Prime",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86968,
				cardmarket: 279556
			}
		},
	],

}

export default card
