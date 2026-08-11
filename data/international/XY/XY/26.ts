import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Delphox",
		'fr-fr': "Goupelin",
		'es-es': "Delphox",
		'it-it': "Delphox",
		'pt-br': "Delphox",
		'de-de': "Fennexis"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		655,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Braixen",
		'fr-fr': "Roussil",
		'es-es': "Braixen",
		'it-it': "Braixen",
		'pt-br': "Braixen",
		'de-de': "Rutena"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Mystical Fire",
				'fr-fr': "Feu Ensorcelé",
				'es-es': "Llama Embrujada",
				'it-it': "Magifiamma",
				'pt-br': "Fogo Místico",
				'de-de': "Magieflamme"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may draw cards until you have 6 cards in your hand.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes robar cartas hasta que tengas 6 cartas en tu mano.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare fino ad avere sei carte in mano.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá comprar cards até ter 6 cards na mão.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du so viele Karten ziehen, bis du 6 Karten auf der Hand hast."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blaze Ball",
				'fr-fr': "Balle Incendiaire",
				'es-es': "Bola Ascuas",
				'it-it': "Pallafuoco",
				'pt-br': "Bola de Fogo",
				'de-de': "Brandball"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each Fire Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Fire attachée à ce Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Fire unida a este Pokémon.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Fire assegnata a questo Pokémon.",
				'pt-br': "Esse ataque causa 20 de danos adicionais para cada Energia Fire ligada a este Pokémon.",
				'de-de': "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Fire-Energie zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It gazes into the flame at the tip of its branch to achieve a focused state, which allows it to see into the future.",
	},

	thirdParty: {
		cardmarket: 281363,
		tcgplayer: 84752
	}
}

export default card
