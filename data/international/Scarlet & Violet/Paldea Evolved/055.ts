import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [975],
	set: Set,

	name: {
		'fr-fr': "Balbalèze",
		'en-us': "Cetitan",
		'es-es': "Cetitan",
		'it-it': "Cetitan",
		'pt-br': "Cetitan",
		'de-de': "Kolowal"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Piétacé",
		'en-us': "Cetoddle",
		'es-es': "Cetoddle",
		'it-it': "Cetoddle",
		'pt-br': "Cetoddle",
		'de-de': "Flaniwal"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Missile Stalactite",
			'en-us': "Icicle Missile",
			'es-es': "Misil Carámbano",
			'it-it': "Missilghiaccio",
			'pt-br': "Míssil Gélido",
			'de-de': "Eiszapfenrakete"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'fr-fr': "Corne Spéciale",
			'en-us': "Special Horn",
			'es-es': "Cornamenta Especial",
			'it-it': "Corno Speciale",
			'pt-br': "Chifre Especial",
			'de-de': "Spezielles Horn"
		},

		effect: {
			'fr-fr': "Si au moins une Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 140 dégâts supplémentaires.",
			'en-us': "If this Pokémon has any Special Energy attached, this attack does 140 more damage.",
			'es-es': "Si este Pokémon tiene alguna Energía Especial unida, este ataque hace 140 puntos de daño más.",
			'it-it': "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 140 danni in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia Especial ligada a ele, este ataque causará 140 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 140 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715530,
				tcgplayer: 497466,
				cardtrader: 248659
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715530,
				tcgplayer: 497466,
				cardtrader: 248659
			}
		},
	],

	illustrator: "Pani Kobayashi",

	description: {
		'en-us': "This Pokémon wanders around snowy, icy areas. It protects its body with powerful muscles and a thick layer of fat under its skin.",
	},
}

export default card
