import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [384],
	set: Set,

	name: {
		'en-us': "Rayquaza VMAX",
		'fr-fr': "Rayquaza VMAX",
		'es-es': "Rayquaza VMAX",
		'it-it': "Rayquaza VMAX",
		'pt-br': "Rayquaza VMAX",
		'de-de': "Rayquaza VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Rayquaza V",
		'fr-fr': "Rayquaza-V",
		'es-es': "Rayquaza V",
		'it-it': "Rayquaza-V",
		'pt-br': "Rayquaza V",
		'de-de': "Rayquaza-V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Azure Pulse",
			'fr-fr': "Pouls Azur",
			'es-es': "Pulso Celeste",
			'it-it': "Azzurropulsar",
			'pt-br': "Pulso Ciano",
			'de-de': "Azurpuls"
		},

		effect: {
			'en-us': "Once during your turn, you may discard your hand and draw 3 cards.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez défausser votre main et piocher 3 cartes.",
			'es-es': "Una vez durante tu turno, puedes descartar las cartas de tu mano y robar 3 cartas.",
			'it-it': "Una sola volta durante il tuo turno, puoi scartare le carte che hai in mano e pescare tre carte.",
			'pt-br': "Uma vez durante o seu turno, você poderá descartar a sua mão e comprar 3 cartas.",
			'de-de': "Einmal während deines Zuges kannst du deine Handkarten auf deinen Ablagestapel legen und 3 Karten ziehen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Lightning"],

		name: {
			'en-us': "Max Burst",
			'fr-fr': "Détonomax",
			'es-es': "Maxiexplosivo",
			'it-it': "Dynascoppio",
			'pt-br': "Ruptura Explosiva Max",
			'de-de': "Dyna-Detonation"
		},

		effect: {
			'en-us': "You may discard any amount of basic Fire Energy or any amount of basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			'fr-fr': "Vous pouvez défausser autant d'Énergies Fire de base ou autant d'Énergies Lightning de base que vous le voulez de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'es-es': "Puedes descartar cualquier cantidad de Energías Fire Básicas o cualquier cantidad de Energías Lightning Básicas de este Pokémon. Este ataque hace 80 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'it-it': "Puoi scartare tutte le Energie base Fire o tutte le Energie base Lightning che vuoi da questo Pokémon. Questo attacco infligge 80 danni in più per ogni carta che hai scartato in questo modo.",
			'pt-br': "Você pode descartar qualquer quantidade de Energia Fire básica ou qualquer quantidade de Energia Lightning básica deste Pokémon. Este ataque causa 80 pontos de dano a mais para cada carta descartada desta forma.",
			'de-de': "Du kannst beliebig viele Basis-Fire-Energien oder beliebig viele Basis-Lightning-Energien von diesem Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 80 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 2,
	regulationMark: "E",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691820,
				tcgplayer: 478210
			}
		},
	],
}

export default card
