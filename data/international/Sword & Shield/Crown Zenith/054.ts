import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [807],
	set: Set,

	name: {
		'en-us': "Zeraora VMAX",
		'fr-fr': "Zeraora VMAX",
		'es-es': "Zeraora VMAX",
		'it-it': "Zeraora VMAX",
		'pt-br': "Zeraora VMAX",
		'de-de': "Zeraora VMAX"
	},

	illustrator: "Nisota Niso",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Zeraora V",
		'fr-fr': "Zeraora-V",
		'es-es': "Zeraora V",
		'it-it': "Zeraora-V",
		'pt-br': "Zeraora V",
		'de-de': "Zeraora-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Reactive Pulse",
			'fr-fr': "Battement Réactif",
			'es-es': "Pulso Reactivo",
			'it-it': "Impulso Reattivo",
			'pt-br': "Pulso Reativo",
			'de-de': "Reaktiver Puls"
		},

		effect: {
			'en-us': "This attack does 60 damage for each of your opponent's Pokémon in play that has an Ability.",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chacun des Pokémon en jeu de votre adversaire ayant un talent.",
			'es-es': "Este ataque hace 60 puntos de daño por cada uno de los Pokémon en juego de tu rival que tenga una habilidad.",
			'it-it': "Questo attacco infligge 60 danni per ogni Pokémon in gioco del tuo avversario che ha un'abilità.",
			'pt-br': "Este ataque causa 60 pontos de dano para cada Pokémon do seu oponente em jogo que tiver uma Habilidade.",
			'de-de': "Diese Attacke fügt für jedes Pokémon deines Gegners im Spiel, das eine Fähigkeit hat, 60 Schadenspunkte zu."
		},

		damage: "60×"
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Max Fist",
			'fr-fr': "Poingomax",
			'es-es': "Maxipuñetazo",
			'it-it': "Dynacolpo",
			'pt-br': "Murro Max",
			'de-de': "Dyna-Treffer"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
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


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691771,
				tcgplayer: 478168
			}
		},
	],
}

export default card
