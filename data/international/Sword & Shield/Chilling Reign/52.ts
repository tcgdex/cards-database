import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [642],
	set: Set,

	name: {
		'en-us': "Thundurus",
		'fr-fr': "Fulguris",
		'es-es': "Thundurus",
		'it-it': "Thundurus",
		'pt-br': "Thundurus",
		'de-de': "Voltolos"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	attacks: [{
		name: {
			'en-us': "Assisting Spark",
			'fr-fr': "Étincelle de Soutien",
			'es-es': "Chispa de Apoyo",
			'it-it': "Scintillaiuto",
			'pt-br': "Faísca Auxiliar",
			'de-de': "Helfender Funke"
		},

		effect: {
			'en-us': "You may attach a Lightning Energy card from your hand to 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez attacher une carte Énergie Lightning de votre main à l'un de vos Pokémon de Banc.",
			'es-es': "Puedes unir 1 carta de Energía Lightning de tu mano a 1 de tus Pokémon en Banca.",
			'it-it': "Puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia Lightning dalla tua mano.",
			'pt-br': "Você pode ligar 1 carta de Energia Lightning da sua mão a 1 dos seus Pokémon no Banco.",
			'de-de': "Du kannst 1 Lightning-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank anlegen."
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Thunder",
			'fr-fr': "Fatal-Foudre",
			'es-es': "Trueno",
			'it-it': "Tuono",
			'pt-br': "Trovão",
			'de-de': "Donner"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 130,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "As it flies around, it shoots lightning all over the place and causes forest fires. It is therefore disliked."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567132,
				tcgplayer: 241709
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567132,
				tcgplayer: 241709
			}
		},
	],
}

export default card
