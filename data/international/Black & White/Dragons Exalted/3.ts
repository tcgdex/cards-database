import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Jumpluff",
		'fr-fr': "Cotovol",
		'es-es': "Jumpluff",
		'it-it': "Jumpluff",
		'pt-br': "Jumpluff",
		'de-de': "Papungha"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		189,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Leave It to the Wind",
				'fr-fr': "Vole au Vent",
				'es-es': "A Merced del Viento",
				'it-it': "Soffione",
				'pt-br': "Deixar ao Vento",
				'de-de': "Windverwehung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may return this Pokémon and all cards attached to it to your hand.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez reprendre ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes devolver este Pokémon y todas las cartas unidas a él a tu mano.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi riprendere in mano questo Pokémon e tutte le carte a esso assegnate.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá devolver este Pokémon e todos os cards ligados a ele para sua mão.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dieses Pokémon und alle daran angelegten Karten zurück auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Acrobatics",
				'fr-fr': "Acrobatie",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Blown by the seasonal winds, it circles the globe, scattering cotton spores as it goes.",
	},

	thirdParty: {
		cardmarket: 280442,
		tcgplayer: 86368
	}
}

export default card
