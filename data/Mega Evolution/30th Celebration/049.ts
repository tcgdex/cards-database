import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "Nurikabe",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Fighting Lightning",
			fr: "Foudre Hostile",
			de: "Blitzfäuste",
			es: "Rayo Luchador",
			it: "Fulmine Combattente",
			'es-mx': "Relámpago Tenaz"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon <em>ex</em>, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-<em>ex</em>, cette attaque inflige 80 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-<em>ex</em> ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon <em>ex</em>, este ataque hace 80 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-<em>ex</em>, questo attacco infligge 80 danni in più.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon <em>ex</em>, este ataque hace 80 puntos de daño más."
		},

		damage: "20+",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907656,
				tcgplayer: 712949
			}
		}
	],
}

export default card
