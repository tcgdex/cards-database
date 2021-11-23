import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Pichu",
		fr: "Pichu"
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
		fr: "Pichu",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Pikachu de votre main sur Pichu (vous le faites ainsi évoluer) et retirer à Pichu tous ses marqueurs de dégât.",
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Electric Circuit",
				fr: "Circuit électrique",
			},
			effect: {
				en: "Search your discard pile for up to 4 Lightning Energy cards, show them to your opponent, and put them into your hand.",
				fr: "Cherchez dans votre pile de défausse jusqu'à 4 cartes Énergie Lightning, montrez-les à votre adversaire et placez-les dans votre main.",
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
		fr: "Les poches sur ses joues sont encore trop petites pour accumuler beaucoup d'électricité."
	}
}

export default card
