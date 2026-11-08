import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Charizard δ",
		'fr-fr': "Dracaufeu δ",
		'de-de': "Glurak"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 120,

	types: [
		"Lightning",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Peal of Thunder",
				'fr-fr': "Coup de tonnerre",
				'de-de': "Donnergrollen"
			},
			effect: {
				'en-us': "Once during your turn, when you play Charizard from your hand to evolve 1 of your Pokémon, you may look at the top 5 cards of your deck, choose as many Energy cards as you like, and attach them to 1 of your Pokémon. Discard the other cards.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous jouez Dracaufeu de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez regarder les 5 cartes du dessus de votre deck, choisir autant de cartes Énergie que vous voulez et les attacher à 1 de vos Pokémon. Ensuite, défaussez les autres cartes.",
				'de-de': "Ein Mal während deines Zuges, wenn du Glurak von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dir die obersten 5 Karten deines Decks anschauen. Lege danach beliebig viele Energiekarten, die du dort gefunden hast, an 1 deiner Pokémon an. Lege die anderen Karten auf deinen Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Metal Burn",
				'fr-fr': "Brûlure métallique",
				'de-de': "Metallbrand"
			},
			effect: {
				'en-us': "Discard all Metal Energy attached to Charizard.",
				'fr-fr': "Défaussez toutes les Énergies  attachées à Dracaufeu.",
				'de-de': "Lege alle an Glurak angelegte -Energie auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277085
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
