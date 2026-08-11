import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Happiny",
		'fr-fr': "Ptiravi",
		'de-de': "Wonneira"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [440],

	hp: 60,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Baby Evolution",
				'fr-fr': "Évolution Bébé",
				'de-de': "Baby Evolution"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put Chansey from your hand onto Happiny (this counts as evolving Happiny) and remove all damage counters from Happiny.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Leveinard de votre main sur Ptiravi (vous le faites ainsi évoluer) et retirer à Ptiravi tous ses marqueurs de dégât.",
				'de-de': "Once during your turn (before your attack), you may put Chansey from your hand onto Happiny (this counts as evolving Happiny) and remove all damage counters from Happiny."
			}
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Hospitality",
				'fr-fr': "Hospitalité",
				'de-de': "Hospitality"
			},
			effect: {
				'en-us': "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. Remove 2 damage counters from the new Defending Pokémon.",
				'fr-fr': "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Retirez 2 marqueurs de dégât au nouveau Pokémon Défenseur.",
				'de-de': "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. Remove 2 damage counters from the new Defending Pokémon."
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

	description: {
		'en-us': "It likes to carry around a small rock. It may wander around others' feet and cause them to stumble."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86008,
				cardmarket: 278497
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278497,
				tcgplayer: 86008
			}
		}
	],

}

export default card
