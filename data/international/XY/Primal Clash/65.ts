import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Eelektross",
		'fr-fr': "Ohmassacre",
		'es-es': "Eelektross",
		'it-it': "Eelektross",
		'pt-br': "Eelektross",
		'de-de': "Zapplarang"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		604,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Eelektrik",
		'fr-fr': "Lampéroie",
		'es-es': "Eelektrik",
		'it-it': "Eelektrik",
		'pt-br': "Eelektrik",
		'de-de': "Zapplalek"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Energy Connect",
				'fr-fr': "Connexion d'Énergie",
				'es-es': "Conectar Energía",
				'it-it': "Connetti Energia",
				'pt-br': "Conectar Energia",
				'de-de': "Energieverknüpfung"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move a basic Energy attached to 1 of your Benched Pokémon to your Active Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie de base attachée à l'un de vos Pokémon de Banc vers votre Pokémon Actif.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 Energía Básica unida a 1 de tus Pokémon en Banca a tu Pokémon Activo.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi spostare un'Energia base da uno dei tuoi Pokémon in panchina al tuo Pokémon attivo tutte le volte che vuoi.",
				'pt-br': "Tantas vezes quanto desejar durante sua vez de jogar (antes de atacar), você pode mover uma Energia básica ligada a 1 dos seus Pokémon no Banco para seu Pokémon Ativo.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Basis-Energie, die an 1 Pokémon auf deiner Bank angelegt ist, auf dein Aktives Pokémon verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electricannon",
				'fr-fr': "Canon Électrique",
				'es-es': "Cañón Eléctrico",
				'it-it': "Elettricannone",
				'pt-br': "Canhão Elétrico",
				'de-de': "Elektrokanone"
			},
			effect: {
				'en-us': "You may discard all Lightning Energy attached to this Pokémon. If you do, this attack does 50 more damage.",
				'fr-fr': "Vous pouvez défausser toutes les Énergies Lightning attachées à ce Pokémon. Dans ce cas, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Puedes descartar todas las Energías Lightning unidas a este Pokémon. Si lo haces, este ataque hace 50 puntos de daño más.",
				'it-it': "Puoi scartare tutte le Energie Lightning assegnate a questo Pokémon. Se lo fai, questo attacco infligge 50 danni in più.",
				'pt-br': "Você pode descartar toda a Energia Lightning ligada a este Pokémon. Se fizer isso, esse ataque causará 50 de danos adicionais.",
				'de-de': "Du kannst 1 an dieses Pokémon angelegte Lightning-Energie auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "80+",

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

	retreat: 3,

	description: {
		'en-us': "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.",
	},

	thirdParty: {
		cardmarket: 273596,
		tcgplayer: 95963
	}
}

export default card
