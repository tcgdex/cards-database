import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Hydreigon",
		'fr-fr': "Trioxhydre",
		'es-es': "Hydreigon",
		'it-it': "Hydreigon",
		'pt-br': "Hydreigon",
		'de-de': "Trikephalo"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		635,
	],

	hp: 150,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Zweilous",
		'fr-fr': "Diamat",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dark Aura",
				'fr-fr': "Aura de Ténèbres",
				'es-es': "Aura Oscura",
				'it-it': "Auroscura",
				'pt-br': "Aura Negra",
				'de-de': "Finsterer Schein"
			},
			effect: {
				'en-us': "All Energy attached to this Pokémon are Darkness Energy instead of their usual type.",
				'fr-fr': "Toutes les Énergies attachées à ce Pokémon sont des Énergies Darkness au lieu de leur type habituel.",
				'es-es': "Todas las Energía unidas a este Pokémon son Energía Darkness en vez del tipo habitual.",
				'it-it': "Tutte le Energie assegnate a questo Pokémon sono Energie Darkness anziché del loro solito tipo.",
				'pt-br': "Toda Energia ligada a este Pokémon é Energia Darkness em vez do tipo usual.",
				'de-de': "Alle Energien, die an dieses Pokémon angelegt sind, liefern Darkness-Energie anstelle ihres normalen Typs."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Berserker Blade",
				'fr-fr': "Lame Folle",
			},
			effect: {
				'en-us': "Does 40 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 40 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The heads on their arms do not have brains. They use all three heads to consume and destroy everything.",
	},

	thirdParty: {
		cardmarket: 280202,
		tcgplayer: 86239
	}
}

export default card
