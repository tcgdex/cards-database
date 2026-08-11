import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [920],
	set: Set,

	name: {
		'fr-fr': "Gambex",
		'en-us': "Lokix",
		'es-es': "Lokix",
		'it-it': "Lokix",
		'pt-br': "Lokix",
		'de-de': "Lextremo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Lilliterelle",
		'en-us': "Nymble",
		'es-es': "Nymble",
		'it-it': "Nymble",
		'pt-br': "Nymble",
		'de-de': "Micrick"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Coup Assaillant",
			'en-us': "Assaulting Kick",
			'es-es': "Patada de Asalto",
			'it-it': "Calcio d'Assalto",
			'pt-br': "Chute Ofensivo",
			'de-de': "Überfallkick"
		},

		effect: {
			'fr-fr': "Si ce Pokémon a évolué de Lilliterelle pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
			'en-us': "If this Pokémon evolved from Nymble during this turn, this attack does 100 more damage.",
			'es-es': "Si este Pokémon ha evolucionado de Nymble durante este turno, este ataque hace 100 puntos de daño más.",
			'it-it': "Se questo Pokémon si è evoluto da Nymble durante questo turno, questo attacco infligge 100 danni in più.",
			'pt-br': "Se este Pokémon evoluiu de Nymble durante este turno, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn sich dieses Pokémon während dieses Zuges aus Micrick entwickelt hat, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Attaque Rapide",
			'en-us': "Speed Attack",
			'es-es': "Ataque Fugaz",
			'it-it': "Attacco Veloce",
			'pt-br': "Ataque em Velocidade",
			'de-de': "Tempoangriff"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715494,
				tcgplayer: 497432,
				cardtrader: 248318
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715494,
				tcgplayer: 497432,
				cardtrader: 248318
			}
		},
	],

	illustrator: "Anesaki Dynamic",

	description: {
		'en-us': "When it decides to fight all out, it stands on its previously folded legs to enter Showdown Mode. It neutralizes its enemies in short order.",
	},
}

export default card
