import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [40],
	set: Set,

	name: {
		'fr-fr': "Grodoudou",
		'en-us': "Wigglytuff",
		'es-es': "Wigglytuff",
		'it-it': "Wigglytuff",
		'pt-br': "Wigglytuff",
		'de-de': "Knuddeluff"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Rondoudou",
		'en-us': "Jigglypuff",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
		'de-de': "Pummeluff"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Thérapie Bouboule",
			'en-us': "Balloon Therapy",
			'es-es': "Terapia Globo",
			'it-it': "Terapia Pallone",
			'pt-br': "Terapia de Balão",
			'de-de': "Ballontherapie"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Thérapeutique de votre main à l'un de vos Pokémon.",
			'en-us': "Once during your turn, you may attach a Therapeutic Energy card from your hand to 1 of your Pokémon.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía Terapéutica de tu mano a uno de tus Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia Terapeutica dalla tua mano.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar uma carta Energia Terapêutica da sua mão a 1 dos seus Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du 1 Therapie-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Coup Magique",
			'en-us': "Magical Shot",
			'es-es': "Disparo Mágico",
			'it-it': "Magicolpo",
			'pt-br': "Tiro Mágico",
			'de-de': "Magischer Schuss"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715559,
				tcgplayer: 497498,
				cardtrader: 248711
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715559,
				tcgplayer: 497498,
				cardtrader: 248711
			}
		},
	],

	illustrator: "Hitoshi Ariga",

	description: {
		'en-us': "It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.",
	},
}

export default card
