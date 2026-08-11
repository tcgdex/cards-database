import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Magearna",
		'fr-fr': "Magearna",
		'es-es': "Magearna",
		'it-it': "Magearna",
		'pt-br': "Magearna",
		'de-de': "Magearna"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		801,
	],

	hp: 90,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Change Clothes",
				'fr-fr': "Changement de Tenue",
				'es-es': "Cambio de Ropa",
				'it-it': "Cambio d’Abito",
				'pt-br': "Trocar de Roupa",
				'de-de': "Kleiderwechsel"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put a Pokémon Tool card attached to 1 of your Pokémon into your hand.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer une carte Outil Pokémon attachée à l’un de vos Pokémon dans votre main.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes poner 1 carta de Herramienta Pokémon unida a 1 de tus Pokémon en tu mano.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi aggiungere alle carte che hai in mano una carta Oggetto Pokémon assegnata a uno dei tuoi Pokémon.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode colocar na sua mão 1 carta de Ferramenta Pokémon ligada a 1 dos seus Pokémon.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Pokémon-Ausrüstung, die an 1 deiner Pokémon angelegt ist, auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rolling Attack",
				'fr-fr': "Attaque Qui Roule",
				'es-es': "Ataque Giro",
				'it-it': "Attacco Rotolante",
				'pt-br': "Golpe Rolador",
				'de-de': "Rollender Angriff"
			},

			damage: 60,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This artificial Pokémon, constructed more than 500 years ago, can understand human speech but cannot itself speak.",
	},

	thirdParty: {
		cardmarket: 316017,
		tcgplayer: 157708
	}
}

export default card
