import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Alolan Geodude",
		'fr-fr': "Racaillou d’Alola",
		'es-es': "Geodude de Alola",
		'it-it': "Geodude di Alola",
		'pt-br': "Geodude de Alola",
		'de-de': "Alola-Kleinstein"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		74,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Charge",
				'fr-fr': "Chargeur",
				'es-es': "Carga",
				'it-it': "Sottocarica",
				'pt-br': "Carga",
				'de-de': "Ladevorgang"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Lightning Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 2 cartes Énergie Lightning dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas de Energía Lightning y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due carte Energia Lightning e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 cartas de Energia Lightning no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Lightning-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smash Bomb",
				'fr-fr': "Bombe Fracassante",
				'es-es': "Bomba Aplastante",
				'it-it': "Bomba Cilecca",
				'pt-br': "Bomba Esmagadora",
				'de-de': "Schmetterbombe"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "If you mistake it for a rock and step on it, it will headbutt you in anger. In addition to the pain, it will also zap you with a shock.",
	},

	thirdParty: {
		cardmarket: 368965,
		tcgplayer: 183808
	}
}

export default card
