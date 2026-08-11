import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [267],
	set: Set,

	name: {
		'en-us': "Beautifly",
		'fr-fr': "Charmillon",
		'es-es': "Beautifly",
		'it-it': "Beautifly",
		'pt-br': "Beautifly",
		'de-de': "Papinella"
	},

	illustrator: "Yuu Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Silcoon",
		'fr-fr': "Armulys",
		'es-es': "Silcoon",
		'it-it': "Silcoon",
		'pt-br': "Silcoon",
		'de-de': "Schaloko"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Stoked Straw",
			'fr-fr': "Trompe Ravie",
			'es-es': "Trompa Ávida",
			'it-it': "Euforicannuccia",
			'pt-br': "Canudo Empolgado",
			'de-de': "Begeisterter Rüssel"
		},

		effect: {
			'en-us': "Once during your turn, you may draw cards until you have 6 cards in your hand.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			'es-es': "Una vez durante tu turno, puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'it-it': "Una sola volta durante il tuo turno, puoi pescare fino ad avere sei carte in mano.",
			'pt-br': "Uma vez durante o seu turno, você poderá comprar cartas até ter 6 cartas na sua mão.",
			'de-de': "Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Mega Drain",
			'fr-fr': "Méga-Sangsue",
			'es-es': "Megaagotar",
			'it-it': "Megassorbimento",
			'pt-br': "Megadreno",
			'de-de': "Megasauger"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674019,
				tcgplayer: 283872
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674019,
				tcgplayer: 283872
			}
		},
	],
}

export default card
