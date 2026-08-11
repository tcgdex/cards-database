import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Reshiram",
		'fr-fr': "Reshiram",
		'es-es': "Reshiram",
		'it-it': "Reshiram",
		'pt-br': "Reshiram",
		'de-de': "Reshiram"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		643,
	],

	hp: 130,

	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Turboblaze",
				'fr-fr': "TurboBrasier",
				'es-es': "Turbollama",
				'it-it': "Piroturbina",
				'pt-br': "Turbochama",
				'de-de': "Turbobrand"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may attach a Fire Energy card from your hand to 1 of your Dragon Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez attacher une carte Énergie Fire de votre main à l'un de vos Pokémon Dragon.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes unir 1 carta de Energía Fire de tu mano a 1 de tus Pokémon Dragon.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo, puoi assegnare una carta Energia Fire che hai in mano a uno dei tuoi Pokémon Dragon.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon for seu Pokémon Ativo, você poderá ligar um card de Energia Fire da sua mão a 1 dos seus Pokémon Dragon.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn dieses Pokémon dein Aktives Pokémon ist, 1 Fire-Energiekarte von deiner Hand an 1 deiner Dragon-Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Bright Wing",
				'fr-fr': "Ailes Lumineuses",
				'es-es': "Ala Brillante",
				'it-it': "Ala di Luce",
				'pt-br': "Asa Brilhante",
				'de-de': "Strahlenschwinge"
			},
			effect: {
				'en-us': "Discard a Fire Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie Fire attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía Fire unida a este Pokémon.",
				'it-it': "Scarta un'Energia Fire assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia Fire ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel."
			},
			damage: 110,

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
		'en-us': "When Reshiram's tail flares, the heat energy moves the atmosphere and changes the world's weather.",
	},

	thirdParty: {
		cardmarket: 282731,
		tcgplayer: 98099
	}
}

export default card
