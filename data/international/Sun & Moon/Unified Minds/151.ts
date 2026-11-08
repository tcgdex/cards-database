import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Dragonite",
		'fr-fr': "Dracolosse",
		'es-es': "Dragonite",
		'it-it': "Dragonite",
		'pt-br': "Dragonite",
		'de-de': "Dragoran"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 160,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Hurricane Charge",
				'fr-fr': "Charge Ouragan",
				'es-es': "Carga Huracán",
				'it-it': "Carica Uragano",
				'pt-br': "Carga de Furacão",
				'de-de': "Stürmische Aufladung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Water Energy card, a Lightning Energy card, or 1 of each from your hand to your Pokémon in any way you like.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Water, une carte Énergie Lightning, ou une de chaque de votre main à vos Pokémon, de la manière que vous voulez.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Water, 1 carta de Energía Lightning o 1 de cada una de tu mano a tus Pokémon de la manera que desees.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a piacimento ai tuoi Pokémon una carta Energia Water, una carta Energia Lightning o entrambe dalla tua mano.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode ligar 1 carta de Energia Water, 1 carta de Energia Lightning, ou 1 de cada da sua mão aos seus Pokémon como desejar.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Water-Energiekarte, 1 Lightning-Energiekarte oder von jeder 1 aus deiner Hand beliebig an deine Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Impact",
				'fr-fr': "Impact du Dragon",
				'es-es': "Impacto Dragón",
				'it-it': "Draghimpatto",
				'pt-br': "Impacto do Dragão",
				'de-de': "Dracheneinschlag"
			},
			effect: {
				'en-us': "Discard 3 Energy from this Pokémon.",
				'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
				'es-es': "Descarta 3 Energías de este Pokémon.",
				'it-it': "Scarta tre Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 3 Energias deste Pokémon.",
				'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It flies over raging seas as if they were nothing. Observing this, a ship's captain dubbed this Pokémon \"the sea incarnate.\"",
	},

	thirdParty: {
		cardmarket: 388547,
		tcgplayer: 195146
	}
}

export default card
