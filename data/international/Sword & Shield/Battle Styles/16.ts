import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [787],
	set: Set,

	name: {
		'en-us': "Tapu Bulu",
		'fr-fr': "Tokotoro",
		'es-es': "Tapu Bulu",
		'it-it': "Tapu Bulu",
		'pt-br': "Tapu Bulu",
		'de-de': "Kapu-Toro"
	},

	illustrator: "Ryota Murayama",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Push Down",
			'fr-fr': "Recul",
			'es-es': "Oprimir",
			'it-it': "Spintonare",
			'pt-br': "Rebaixar",
			'de-de': "Runterdrücken"
		},

		effect: {
			'en-us': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			'fr-fr': "Votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
			'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
			'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'en-us': "Nature's Judgment",
			'fr-fr': "Jugement de la Nature",
			'es-es': "Sentencia de la Naturaleza",
			'it-it': "Giudizio della Natura",
			'pt-br': "Julgamento da Natureza",
			'de-de': "Gebot der Natur"
		},

		effect: {
			'en-us': "You may discard all Energy from this Pokémon. If you do, this attack does 80 more damage.",
			'fr-fr': "Vous pouvez défausser toute l'Énergie de ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Puedes descartar todas las Energías de este Pokémon. Si lo haces, este ataque hace 80 puntos de daño más.",
			'it-it': "Puoi scartare tutte le Energie da questo Pokémon. Se lo fai, questo attacco infligge 80 danni in più.",
			'pt-br': "Você pode descartar todas as Energias deste Pokémon. Se fizer isto, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Although it's called a guardian deity, it's violent enough to crush anyone it sees as an enemy."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 544981,
				tcgplayer: 234082
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544981,
				tcgplayer: 234082
			}
		},
	],
}

export default card
