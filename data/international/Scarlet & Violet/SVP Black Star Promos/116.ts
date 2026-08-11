import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [392],
	set: Set,

	name: {
		'en-us': "Infernape",
		'fr-fr': "Simiabraz",
		'es-es': "Infernape",
		'it-it': "Infernape",
		'pt-br': "Infernape",
		'de-de': "Panferno"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Monferno",
		'fr-fr': "Chimpenfeu",
		'es-es': "Monferno",
		'it-it': "Monferno",
		'pt-br': "Monferno",
		'de-de': "Panpyro"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Pyro Dance",
			'fr-fr': "Danse Pyro",
			'es-es': "Pirodanza",
			'it-it': "Danza Infuocata",
			'pt-br': "Dança Incendiária",
			'de-de': "Pyrotanz"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a Basic {R} Energy card, a Basic {F} Energy card, or 1 of each from your hand to your Pokémon in any way you like.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {R} de base, une carte Énergie {F} de base, ou une de chaque de votre main à vos Pokémon comme il vous plaît.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía {R} Básica, 1 carta de Energía {F} Básica o 1 de cada una de tu mano a tus Pokémon de la manera que desees.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare ai tuoi Pokémon una carta Energia base {R}, una carta Energia base {F} o entrambe dalla tua mano nel modo che preferisci.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar uma carta de Energia {R} Básica, uma carta de Energia {F} Básica ou 1 de cada da sua mão aos seus Pokémon como desejar.",
			'de-de': "Einmal während deines Zuges kannst du 1 Basis-{R}-Energiekarte, 1 Basis-{F}-Energiekarte oder von beiden 1 aus deiner Hand beliebig an deine Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Scorching Fire",
			'fr-fr': "Feu Infernal",
			'es-es': "Fuego Abrasador",
			'it-it': "Fuoco Ustionante",
			'pt-br': "Fogo Ardente",
			'de-de': "Versengendes Feuer"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Kazumasa Yasukuni",
	description: {
		'en-us': "Its crown of fire is indicative of its fiery nature. It is beaten by none in terms of quickness.",
	},
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 769413,
				tcgplayer: 551689
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 769414,
				tcgplayer: 563316
			},
		}
	],
}

export default card
