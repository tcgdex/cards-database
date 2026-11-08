import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [896],
	set: Set,

	name: {
		'en-us': "Glastrier",
		'fr-fr': "Blizzeval",
		'es-es': "Glastrier",
		'it-it': "Glastrier",
		'pt-br': "Glastrier",
		'de-de': "Polaross"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Freeze Down",
			'fr-fr': "Blocage Gelé",
			'es-es': "Congelación",
			'it-it': "Congelafondo",
			'pt-br': "Congelamento Ligeiro",
			'de-de': "Einfrieren"
		},

		effect: {
			'en-us': "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
			'fr-fr': "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			'es-es': "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
			'pt-br': "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante o próximo turno do seu oponente.",
			'de-de': "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Wild Tackle",
			'fr-fr': "Tacle Brutal",
			'es-es': "Placaje Salvaje",
			'it-it': "Azionferoce",
			'pt-br': "Investida Feroz",
			'de-de': "Wilder Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674061,
				tcgplayer: 283925
			}
		},
		{
			type: 'holo',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 740471
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674061,
				tcgplayer: 283925
			}
		},
	],
}

export default card
