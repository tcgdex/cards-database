import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Zeraora VMAX",
		fr: "Zeraora VMAX",
		es: "Zeraora VMAX",
		it: "Zeraora VMAX",
		pt: "Zeraora VMAX",
		de: "Zeraora VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	evolveFrom: {
		en: "Zeraora V",
		fr: "Zeraora-V",
		es: "Zeraora V",
		it: "Zeraora-V",
		pt: "Zeraora V",
		de: "Zeraora-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Reactive Pulse",
			fr: "Battement Réactif",
			es: "Pulso Reactivo",
			it: "Impulso Reattivo",
			pt: "Pulso Reativo",
			de: "Reaktiver Puls"
		},

		effect: {
			en: "This attack does 60 damage for each of your opponent's Pokémon in play that has an Ability.",
			fr: "Cette attaque inflige 60 dégâts pour chacun des Pokémon en jeu de votre adversaire ayant un talent.",
			es: "Este ataque hace 60 puntos de daño por cada uno de los Pokémon en juego de tu rival que tenga una habilidad.",
			it: "Questo attacco infligge 60 danni per ogni Pokémon in gioco del tuo avversario che ha un'abilità.",
			pt: "Este ataque causa 60 pontos de dano para cada Pokémon do seu oponente em jogo que tiver uma Habilidade.",
			de: "Diese Attacke fügt für jedes Pokémon deines Gegners im Spiel, das eine Fähigkeit hat, 60 Schadenspunkte zu."
		},

		damage: "60×"
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Max Fist",
			fr: "Poingomax",
			es: "Maxipuñetazo",
			it: "Dynacolpo",
			pt: "Murro Max",
			de: "Dyna-Treffer"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 240
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card