import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Elekid",
		fr: "Elekid",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		239,
	],
	hp: 40,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Electabuzz from your hand onto Elekid (this counts as evolving Elekid) and remove all damage counters from Elekid.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Elektek de votre main sur Elekid (vous le faites ainsi évoluer) et retirer à Elekid tous ses marqueurs de dégât.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Outlet",
				fr: "Exutoire",
			},
			effect: {
				en: "Search your deck for a Lightning Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie Lightning, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
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



}

export default card
