import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Houndoom",
		'fr-fr': "Démolosse obscur",
		'de-de': "Dunkles Hundemon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 60,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Houndour",
		'fr-fr': "Malosse"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Eerie Howl",
				'fr-fr': "Hurlement étrange",
				'de-de': "Eerie Howl"
			},
			effect: {
				'en-us': "If your opponent's Bench isn't full, look at his or her hand. If your opponent has any Baby Pokémon or Basic Pokémon there, choose 1 of them and put it on his or her Bench. Then, switch it with the Defending Pokémon.",
				'fr-fr': "Si le Banc de votre adversaire n'est pas plein, regardez sa main. Si elle contient des Bébés Pokémon ou des Pokémon de base, choisissez-en un et placez-le sur son Banc. Puis échangez-le contre le Pokémon Défenseur.",
				'de-de': "If your opponent's Bench isn't full, look at his or her hand. If your opponent has any Baby Pokémon or Basic Pokémon there, choose 1 of them and put it on his or her Bench. Then, switch it with the Defending Pokémon."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Dark Fire",
				'fr-fr': "Sombre feu",
				'de-de': "Dark Fire"
			},
			effect: {
				'en-us': "If there are any Energy cards attached to Dark Houndoom, discard 1 of them and this attack does 30 damage plus 20 more damage (plus 10 more damage for the Energy you discarded). If there aren't any, this attack does 30 damage.",
				'fr-fr': "S'il y a des cartes Énergie  attachées à Démolosse obscur, défaussez-vous en d'une. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires (plus 10 dégâts pour la carte Énergie  défaussée). Sinon, cette attaque inflige 30 dégâts.",
				'de-de': "If there are any  Energy cards attached to Dark Houndoom, discard 1 of them and this attack does 30 damage plus 20 more damage (plus 10 more damage for the  Energy you discarded). If there aren't any, this attack does 30 damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "The flame it breathes is actually a volatile poison it produces internally that ignites when exposed to air.",
		'fr-fr': "Les flammes qu'il crache sont en fait un poison qu'il sécrète et qui s'enflamme au contact de l'air."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274659,
				tcgplayer: 84610
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274659,
				tcgplayer: 84610
			}
		}
	]
}

export default card
