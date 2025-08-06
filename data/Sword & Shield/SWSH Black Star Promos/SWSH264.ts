import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Zeraora VMAX",
		de: "Zeraora VMAX",
		es: "Zeraora VMAX",
		pt: "Zeraora VMAX",
		it: "Zeraora VMAX",
		en: "Zeraora VMAX"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Zeraora-V",
		de: "Zeraora-V",
		es: "Zeraora V",
		pt: "Zeraora V",
		it: "Zeraora-V",
		en: "Zeraora V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			fr: "Battement Réactif",
			de: "Reaktiver Puls",
			es: "Pulso Reactivo",
			pt: "Pulso Reativo",
			it: "Impulso Reattivo",
			en: "Reactive Pulse"
		},

		effect: {
			fr: "Cette attaque inflige 60 dégâts pour chacun des Pokémon en jeu de votre adversaire ayant un talent.",
			de: "Diese Attacke fügt für jedes Pokémon deines Gegners im Spiel, das eine Fähigkeit hat, 60 Schadenspunkte zu.",
			es: "Este ataque hace 60 puntos de daño por cada uno de los Pokémon en juego de tu rival que tenga una habilidad.",
			pt: "Este ataque causa 60 pontos de dano para cada Pokémon do seu oponente em jogo que tiver uma Habilidade.",
			it: "Questo attacco infligge 60 danni per ogni Pokémon in gioco del tuo avversario che ha un'abilità.",
			en: "This attack does 60 damage for each of your opponent's Pokémon in play that has an Ability."
		},

		damage: "60×"
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			fr: "Poingomax",
			de: "Dyna-Treffer",
			es: "Maxipuñetazo",
			pt: "Murro Max",
			it: "Dynacolpo",
			en: "Max Fist"
		},

		effect: {
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 2 Energías de este Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			en: "Discard 2 Energy from this Pokémon."
		},

		damage: 240
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 669839
	}
}

export default card