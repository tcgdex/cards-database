import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [110],
	set: Set,

	name: {
		'en-us': "Galarian Weezing",
		'fr-fr': "Smogogo de Galar",
		'es-es': "Weezing de Galar",
		'it-it': "Weezing di Galar",
		'pt-br': "Weezing de Galar",
		'de-de': "Galar-Smogmog"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Koffing",
		'fr-fr': "Smogo",
		'es-es': "Koffing",
		'it-it': "Koffing",
		'pt-br': "Koffing",
		'de-de': "Smogon"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Energy Factory",
			'fr-fr': "Usine d'Énergie",
			'es-es': "Fábrica de Energía",
			'it-it': "Fabbrica di Energia",
			'pt-br': "Fábrica de Energia",
			'de-de': "Energiefabrik"
		},

		effect: {
			'en-us': "Each basic Darkness Energy attached to your Pokémon that have \"Weezing\" in their name provides DarknessDarkness Energy. You can't apply more than 1 Energy Factory Ability at a time.",
			'fr-fr': "Chaque Énergie Darkness de base attachée à vos Pokémon ayant « Smogogo » dans leur nom fournit de l'Énergie DarknessDarkness. Vous ne pouvez utiliser qu'un talent Usine d'Énergie à la fois.",
			'es-es': "Cada Energía Darkness Básica unida a tus Pokémon que tengan “Weezing” en su nombre proporciona 2 Energías Darkness. No puedes aplicar más de 1 habilidad Fábrica de Energía a la vez.",
			'it-it': "Ogni Energia base Darkness assegnata ai tuoi Pokémon con “Weezing” nel nome fornisce Energia Darkness Darkness. Non puoi applicare più di un'abilità Fabbrica di Energia alla volta.",
			'pt-br': "Cada Energia Darkness básica ligada aos seus Pokémon que tenham “Weezing” em seu nome fornece Energia DarknessDarkness. Você não pode usar mais de 1 Habilidade Fábrica de Energia por vez.",
			'de-de': "Jede Basis-Darkness-Energie, die an deine Pokémon, bei denen das Wort „Smogmog“ zum Namen gehört, angelegt ist, liefert DarknessDarkness-Energie. Du kannst immer nur jeweils 1 Fähigkeit Energiefabrik einsetzen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Suffocating Gas",
			'fr-fr': "Gaz Suffocant",
			'es-es': "Gas Sofocante",
			'it-it': "Gas Soffocante",
			'pt-br': "Gás Asfixiante",
			'de-de': "Würgegas"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Long ago, during a time when droves of factories fouled the air with pollution, Weezing changed into this form for some reason."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567204,
				tcgplayer: 241765
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567204,
				tcgplayer: 241765
			}
		},
	],
}

export default card
