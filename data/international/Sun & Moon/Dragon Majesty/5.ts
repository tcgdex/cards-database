import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
		'es-es': "Combusken",
		'it-it': "Combusken",
		'pt-br': "Combusken",
		'de-de': "Jungglut"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		256,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Natural Cure",
				'fr-fr': "Remède Naturel",
				'es-es': "Cura Natural",
				'it-it': "Naturcura",
				'pt-br': "Cura Natural",
				'de-de': "Innere Kraft"
			},
			effect: {
				'en-us': "Whenever you attach an Energy card from your hand to this Pokémon, remove all Special Conditions from it.",
				'fr-fr': "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon, retirez tous les États Spéciaux de ce Pokémon.",
				'es-es': "Cada vez que unas 1 carta de Energía de tu mano a este Pokémon, elimina todas sus Condiciones Especiales.",
				'it-it': "Ogni volta che assegni una carta Energia a questo Pokémon dalla tua mano, rimuovi tutte le condizioni speciali che lo influenzano.",
				'pt-br': "Sempre que ligar 1 carta de Energia da sua mão a este Pokémon, remova todas as Condições Especiais dele.",
				'de-de': "Jedes Mal, wenn du 1 Energiekarte aus deiner Hand an dieses Pokémon anlegst, verlieren alle Speziellen Zustände auf diesem Pokémon ihre Wirkung."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lunge",
				'fr-fr': "Coup Rapide",
				'es-es': "Plancha",
				'it-it': "Affondo",
				'pt-br': "Estocada",
				'de-de': "Anfallen"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 60,

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
		'en-us': "During a battle, the hot flame in its body increases. Its kicks have outstanding destructive power.",
	},

	thirdParty: {
		cardmarket: 363477,
		tcgplayer: 175273
	}
}

export default card
