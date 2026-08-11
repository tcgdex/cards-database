import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [807],
	set: Set,

	name: {
		'fr-fr': "Zeraora VMAX",
		'de-de': "Zeraora VMAX",
		'es-es': "Zeraora VMAX",
		'pt-br': "Zeraora VMAX",
		'it-it': "Zeraora VMAX",
		'en-us': "Zeraora VMAX"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	evolveFrom: {
		'fr-fr': "Zeraora-V",
		'de-de': "Zeraora-V",
		'es-es': "Zeraora V",
		'pt-br': "Zeraora V",
		'it-it': "Zeraora-V",
		'en-us': "Zeraora V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'fr-fr': "Battement Réactif",
			'de-de': "Reaktiver Puls",
			'es-es': "Pulso Reactivo",
			'pt-br': "Pulso Reativo",
			'it-it': "Impulso Reattivo",
			'en-us': "Reactive Pulse"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 60 dégâts pour chacun des Pokémon en jeu de votre adversaire ayant un talent.",
			'de-de': "Diese Attacke fügt für jedes Pokémon deines Gegners im Spiel, das eine Fähigkeit hat, 60 Schadenspunkte zu.",
			'es-es': "Este ataque hace 60 puntos de daño por cada uno de los Pokémon en juego de tu rival que tenga una habilidad.",
			'pt-br': "Este ataque causa 60 pontos de dano para cada Pokémon do seu oponente em jogo que tiver uma Habilidade.",
			'it-it': "Questo attacco infligge 60 danni per ogni Pokémon in gioco del tuo avversario che ha un'abilità.",
			'en-us': "This attack does 60 damage for each of your opponent's Pokémon in play that has an Ability."
		},

		damage: "60×"
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Poingomax",
			'de-de': "Dyna-Treffer",
			'es-es': "Maxipuñetazo",
			'pt-br': "Murro Max",
			'it-it': "Dynacolpo",
			'en-us': "Max Fist"
		},

		effect: {
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'en-us': "Discard 2 Energy from this Pokémon."
		},

		damage: 240
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 669839
	}
}

export default card
