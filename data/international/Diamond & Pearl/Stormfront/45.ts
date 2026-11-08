import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Pichu",
		'fr-fr': "Pichu",
		'de-de': "Pichu"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		172,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'fr-fr': "Pichu",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Baby Evolution",
				'fr-fr': "Évolution bébé",
				'de-de': "Baby Evolution"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Pikachu de votre main sur Pichu (vous le faites ainsi évoluer) et retirer à Pichu tous ses marqueurs de dégât.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du Pikachu von deiner Hand auf Pichu legen (das zählt als Entwickeln von Pichu). Entferne alle Schadensmarken von Pichu."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Electric Circuit",
				'fr-fr': "Circuit électrique",
				'de-de': "Stromkreis"
			},
			effect: {
				'en-us': "Search your discard pile for up to 4 Lightning Energy cards, show them to your opponent, and put them into your hand.",
				'fr-fr': "Cherchez dans votre pile de défausse jusqu'à 4 cartes Énergie Lightning, montrez-les à votre adversaire et placez-les dans votre main.",
				'de-de': "Durchsuche deinen Ablagestapel nach bis zu 4 -Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The electric pouches on its cheeks are still small. They cannot store much electricity yet.",
		'fr-fr': "Les poches sur ses joues sont encore trop petites pour accumuler beaucoup d'électricité."
	},

	thirdParty: {
		cardmarket: 278343,
		tcgplayer: 88019
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["platinum"]
		}
	]
}

export default card
