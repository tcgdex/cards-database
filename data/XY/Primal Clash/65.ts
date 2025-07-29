import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
		es: "Eelektross",
		it: "Eelektross",
		pt: "Eelektross",
		de: "Zapplarang"
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
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Energy Connect",
				fr: "Connexion d'Énergie",
				es: "Conectar Energía",
				it: "Connetti Energia",
				pt: "Conectar Energia",
				de: "Energieverknüpfung"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a basic Energy attached to 1 of your Benched Pokémon to your Active Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie de base attachée à l'un de vos Pokémon de Banc vers votre Pokémon Actif.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 Energía Básica unida a 1 de tus Pokémon en Banca a tu Pokémon Activo.",
				it: "Durante il tuo turno, prima di attaccare, puoi spostare un'Energia base da uno dei tuoi Pokémon in panchina al tuo Pokémon attivo tutte le volte che vuoi.",
				pt: "Tantas vezes quanto desejar durante sua vez de jogar (antes de atacar), você pode mover uma Energia básica ligada a 1 dos seus Pokémon no Banco para seu Pokémon Ativo.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Basis-Energie, die an 1 Pokémon auf deiner Bank angelegt ist, auf dein Aktives Pokémon verschieben."
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
				en: "Electricannon",
				fr: "Canon Électrique",
				es: "Cañón Eléctrico",
				it: "Elettricannone",
				pt: "Canhão Elétrico",
				de: "Elektrokanone"
			},
			effect: {
				en: "You may discard all Lightning Energy attached to this Pokémon. If you do, this attack does 50 more damage.",
				fr: "Vous pouvez défausser toutes les Énergies Lightning attachées à ce Pokémon. Dans ce cas, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Puedes descartar todas las Energías Lightning unidas a este Pokémon. Si lo haces, este ataque hace 50 puntos de daño más.",
				it: "Puoi scartare tutte le Energie Lightning assegnate a questo Pokémon. Se lo fai, questo attacco infligge 50 danni in più.",
				pt: "Você pode descartar toda a Energia Lightning ligada a este Pokémon. Se fizer isso, esse ataque causará 50 de danos adicionais.",
				de: "Du kannst 1 an dieses Pokémon angelegte Lightning-Energie auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 50 weitere Schadenspunkte zu."
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

	thirdParty: {
		cardmarket: 273596
	}
}

export default card
