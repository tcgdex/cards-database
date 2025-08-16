import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
		es: "Dragonite",
		it: "Dragonite",
		pt: "Dragonite",
		de: "Dragoran"
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
		en: "Dragonair",
		fr: "Draco",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hurricane Charge",
				fr: "Charge Ouragan",
				es: "Carga Huracán",
				it: "Carica Uragano",
				pt: "Carga de Furacão",
				de: "Stürmische Aufladung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Water Energy card, a Lightning Energy card, or 1 of each from your hand to your Pokémon in any way you like.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Water, une carte Énergie Lightning, ou une de chaque de votre main à vos Pokémon, de la manière que vous voulez.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Water, 1 carta de Energía Lightning o 1 de cada una de tu mano a tus Pokémon de la manera que desees.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a piacimento ai tuoi Pokémon una carta Energia Water, una carta Energia Lightning o entrambe dalla tua mano.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode ligar 1 carta de Energia Water, 1 carta de Energia Lightning, ou 1 de cada da sua mão aos seus Pokémon como desejar.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Water-Energiekarte, 1 Lightning-Energiekarte oder von jeder 1 aus deiner Hand beliebig an deine Pokémon anlegen."
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
				en: "Dragon Impact",
				fr: "Impact du Dragon",
				es: "Impacto Dragón",
				it: "Draghimpatto",
				pt: "Impacto do Dragão",
				de: "Dracheneinschlag"
			},
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies de ce Pokémon.",
				es: "Descarta 3 Energías de este Pokémon.",
				it: "Scarta tre Energie assegnate a questo Pokémon.",
				pt: "Descarte 3 Energias deste Pokémon.",
				de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
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

	thirdParty: {
		cardmarket: 388547,
		tcgplayer: 195146
	}
}

export default card
