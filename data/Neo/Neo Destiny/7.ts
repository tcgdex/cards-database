import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Houndoom",
		fr: "Démolosse obscur",
		de: "Dunkles Hundemon"
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
		en: "Houndour",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Eerie Howl",
				fr: "Hurlement étrange",
				de: "Eerie Howl"
			},
			effect: {
				en: "If your opponent's Bench isn't full, look at his or her hand. If your opponent has any Baby Pokémon or Basic Pokémon there, choose 1 of them and put it on his or her Bench. Then, switch it with the Defending Pokémon.",
				fr: "Si le Banc de votre adversaire n'est pas plein, regardez sa main. Si elle contient des Bébés Pokémon ou des Pokémon de base, choisissez-en un et placez-le sur son Banc. Puis échangez-le contre le Pokémon Défenseur.",
				de: "If your opponent's Bench isn't full, look at his or her hand. If your opponent has any Baby Pokémon or Basic Pokémon there, choose 1 of them and put it on his or her Bench. Then, switch it with the Defending Pokémon."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Dark Fire",
				fr: "Sombre feu",
				de: "Dark Fire"
			},
			effect: {
				en: "If there are any Energy cards attached to Dark Houndoom, discard 1 of them and this attack does 30 damage plus 20 more damage (plus 10 more damage for the Energy you discarded). If there aren't any, this attack does 30 damage.",
				fr: "S'il y a des cartes Énergie  attachées à Démolosse obscur, défaussez-vous en d'une. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires (plus 10 dégâts pour la carte Énergie  défaussée). Sinon, cette attaque inflige 30 dégâts.",
				de: "If there are any  Energy cards attached to Dark Houndoom, discard 1 of them and this attack does 30 damage plus 20 more damage (plus 10 more damage for the  Energy you discarded). If there aren't any, this attack does 30 damage."
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

	description: {
		fr: "Les flammes qu'il crache sont en fait un poison qu'il sécrète et qui s'enflamme au contact de l'air."
	},

	thirdParty: {
		cardmarket: 274659,
		tcgplayer: 84610
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
