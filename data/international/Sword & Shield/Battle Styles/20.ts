import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [244],
	set: Set,

	name: {
		'en-us': "Entei",
		'fr-fr': "Entei",
		'es-es': "Entei",
		'it-it': "Entei",
		'pt-br': "Entei",
		'de-de': "Entei"
	},

	illustrator: "kodama",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	attacks: [{
		name: {
			'en-us': "Heat Dash",
			'fr-fr': "Bouffée de Chaleur",
			'es-es': "Carga Ardiente",
			'it-it': "Teporcorsa",
			'pt-br': "Arremetida de Calor",
			'de-de': "Hitzespurt"
		},

		effect: {
			'en-us': "You may attach a Fire Energy card from your hand to this Pokémon.",
			'fr-fr': "Vous pouvez attacher une carte Énergie Fire de votre main à ce Pokémon.",
			'es-es': "Puedes unir 1 carta de Energía Fire de tu mano a este Pokémon.",
			'it-it': "Puoi assegnare a questo Pokémon una carta Energia Fire dalla tua mano.",
			'pt-br': "Você pode ligar 1 carta de Energia Fire da sua mão a este Pokémon.",
			'de-de': "Du kannst 1 Fire-Energiekarte aus deiner Hand an dieses Pokémon anlegen."
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'en-us': "Fire Fang",
			'fr-fr': "Crocs Feu",
			'es-es': "Colmillo Ígneo",
			'it-it': "Rogodenti",
			'pt-br': "Presas de Fogo",
			'de-de': "Feuerzahn"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 90,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It is said that when it roars, a volcano erupts somewhere around the globe."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 545006,
				tcgplayer: 234098
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545006,
				tcgplayer: 234098
			}
		},
	],
}

export default card
