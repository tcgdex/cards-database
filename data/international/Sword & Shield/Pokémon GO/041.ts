import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [19],
	set: Set,

	name: {
		'en-us': "Alolan Rattata",
		'fr-fr': "Rattata d'Alola",
		'es-es': "Rattata de Alola",
		'it-it': "Rattata di Alola",
		'pt-br': "Rattata de Alola",
		'de-de': "Alola-Rattfratz"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Hyper Fang",
			'fr-fr': "Croc de Mort",
			'es-es': "Hipercolmillo",
			'it-it': "Iperzanna",
			'pt-br': "Hiperpresa",
			'de-de': "Hyperzahn"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Night after night, they sneak into people's homes seeking food. A massive outbreak of them has become an issue of public concern.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665671,
				tcgplayer: 277002
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665671,
				tcgplayer: 277002
			}
		},
	],
}

export default card
