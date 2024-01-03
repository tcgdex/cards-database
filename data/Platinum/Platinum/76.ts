import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Happiny",
		fr: "Ptiravi",
		de: "Wonneira"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		440,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution Bébé",
				de: "Baby Evolution"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Chansey from your hand onto Happiny (this counts as evolving Happiny) and remove all damage counters from Happiny.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Leveinard de votre main sur Ptiravi (vous le faites ainsi évoluer) et retirer à Ptiravi tous ses marqueurs de dégât.",
				de: "Once during your turn (before your attack), you may put Chansey from your hand onto Happiny (this counts as evolving Happiny) and remove all damage counters from Happiny."
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Hospitality",
				fr: "Hospitalité",
				de: "Hospitality"
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. Remove 2 damage counters from the new Defending Pokémon.",
				fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Retirez 2 marqueurs de dégât au nouveau Pokémon Défenseur.",
				de: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. Remove 2 damage counters from the new Defending Pokémon."
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
