import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Rayquaza VMAX",
		'fr-fr': "Rayquaza VMAX",
		'es-es': "Rayquaza VMAX",
		'it-it': "Rayquaza VMAX",
		'pt-br': "Rayquaza VMAX",
		'de-de': "Rayquaza VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	illustrator: "PLANETA Mochizuki",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Azure Pulse",
			'fr-fr': "Pouls Azur",
			'es-es': "Pulso Celeste",
			'pt-br': "Azure Pulse",
			'it-it': "Azzurropulsar",
			'de-de': "Azurpuls"
		},

		effect: {
			'en-us': "Once during your turn, you may discard your hand and draw 3 cards.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez défausser votre main et piocher 3 cartes.",
			'es-es': "Una vez durante tu turno, puedes descartar las cartas de tu mano y robar 3 cartas.",
			'pt-br': "Once during your turn, you may discard your hand and draw 3 cards.",
			'it-it': "Una sola volta durante il tuo turno, puoi scartare le carte che hai in mano e pescare tre carte.",
			'de-de': "Einmal während deines Zuges kannst du deine Handkarten auf deinen Ablagestapel legen und 3 Karten ziehen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Max Burst",
			'fr-fr': "Détonomax",
			'es-es': "Maxiexplosivo",
			'it-it': "Dynascoppio",
			'pt-br': "Max Burst",
			'de-de': "Dyna-Detonation"
		},

		effect: {
			'en-us': "You may discard any amount of basic Fire Energy or any amount of basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			'fr-fr': "Vous pouvez défausser autant d'Énergies Fire de base ou autant d'Énergies Lightning de base que vous le voulez de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'es-es': "Puedes descartar cualquier cantidad de Energías Fire Básicas o cualquier cantidad de Energías Lightning Básicas de este Pokémon. Este ataque hace 80 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'it-it': "Puoi scartare tutte le Energie base Fire o tutte le Energie base Lightning che vuoi da questo Pokémon. Questo attacco infligge 80 danni in più per ogni carta che hai scartato in questo modo.",
			'pt-br': "You may discard any amount of basic Fire Energy or any amount of basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			'de-de': "Du kannst beliebig viele Basis-Fire-Energien oder beliebig viele Basis-Lightning-Energien von diesem Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 80 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Fire", "Lightning"]
	}],

	retreat: 2,
	stage: "VMAX",
	dexId: [384],

	evolveFrom: {
		'en-us': "Rayquaza V",
		'fr-fr': "Rayquaza-V",
		'es-es': "Rayquaza V",
		'it-it': "Rayquaza-V",
		'pt-br': "Rayquaza V",
		'de-de': "Rayquaza-V"
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574159,
				tcgplayer: 246730
			}
		},
		{
			type: 'holo',
			size: 'jumbo',
			thirdParty: {
				cardmarket: 680134
			}
		},
	],
}

export default card
