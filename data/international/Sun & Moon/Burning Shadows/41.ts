import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'es-es': "Raichu",
		'it-it': "Raichu",
		'pt-br': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Evoshock",
				'fr-fr': "Choc Évolutif",
				'es-es': "Evoimpacto",
				'it-it': "Evoshock",
				'pt-br': "Evochoque",
				'de-de': "Evoschock"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may leave your opponent’s Active Pokémon Paralyzed.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Paralysé.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes dejar al Pokémon Activo de tu rival Paralizado.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario paralizzato.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode deixar o Pokémon Ativo do seu oponente Paralisado.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du das Aktive Pokémon deines Gegners paralysieren."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Volt Tackle",
				'fr-fr': "Électacle",
				'es-es': "Placaje Eléc",
				'it-it': "Locomovolt",
				'pt-br': "Investida Trovão",
				'de-de': "Volttackle"
			},
			effect: {
				'en-us': "This Pokémon does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 30 dégâts.",
				'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Este Pokémon causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 130,

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

	retreat: 1,

	description: {
		'en-us': "It unleashes electric shocks that can reach 100,000 volts. When agitated, it can knock out even an Indian elephant.",
	},

	thirdParty: {
		cardmarket: 299445,
		tcgplayer: 138523
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
