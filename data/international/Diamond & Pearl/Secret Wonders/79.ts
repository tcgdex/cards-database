import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Burmy Sandy Cloak",
		'fr-fr': "Cheniti Cape Sable",
		'de-de': "Burmy Sandumhang"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		412,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Wear Cloak",
				'fr-fr': "Cape",
				'de-de': "Umhang tragen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Burmy Sandy Cloak is your Active Pokémon, you may search your discard pile for a basic Fighting Energy card and attach it to Burmy Sandy Cloak.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si Cheniti Cape Sable est votre Pokémon Actif, vous pouvez choisir dans votre pile de défausse une carte Énergie de base Fighting et l'attacher à Cheniti Cape Sable.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Burmy Sandumhang dein Aktives Pokémon ist, deinen Ablagestapel nach einer -Basis-Energiekarte durchsuchen und an Burmy Sandumhang anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sandy Cloak Tackle",
				'fr-fr': "Charge cape sable",
				'de-de': "Sandumhang Tackle"
			},
			effect: {
				'en-us': "If Burmy Sandy Cloak has any Fighting Energy attached to it, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Si Cheniti Cape Sable possède de l'Énergie Fighting, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wenn an Burmy Sandumhang mindestens 1 -Energie angelegt ist, fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "To shelter itself from cold, wintry winds, it covers itself with a cloak made of twigs and leaves.",
	},

	thirdParty: {
		cardmarket: 277832,
		tcgplayer: 84052
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
