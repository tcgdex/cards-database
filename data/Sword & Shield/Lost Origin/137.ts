import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeot V",
		fr: "Roucarnage V",
		es: "Pidgeot V",
		it: "Pidgeot V",
		pt: "Pidgeot V",
		de: "Tauboss V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Vanishing Wings",
			fr: "Ailes Oblitérées",
			es: "Alas de Fuga",
			it: "Ali Evanescenti",
			pt: "Asas Desvanecentes",
			de: "Fluchtflügel"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is on your Bench, you may shuffle it and all attached cards into your deck.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez le mélanger dans votre deck, ainsi que toutes les cartes attachées.",
			es: "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajar todas las cartas.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi rimischiarlo nel tuo mazzo insieme a tutte le carte a esso assegnate.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá embaralhá-lo e todas as cartas ligadas a ele no seu baralho.",
			de: "Einmal während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du es und alle angelegten Karten in dein Deck mischen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Flight Surf",
			fr: "Vol Glissé",
			es: "Surfeo Aéreo",
			it: "Surf Aereo",
			pt: "Surfe Aéreo",
			de: "Gleitflug"
		},

		effect: {
			en: "If you have a Stadium in play, this attack does 80 more damage.",
			fr: "Si vous avez un Stade en jeu, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si tienes un Estadio en juego, este ataque hace 80 puntos de daño más.",
			it: "Se hai in gioco una carta Stadio, questo attacco infligge 80 danni in più.",
			pt: "Se você tiver um Estádio em jogo, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn du eine Stadionkarte im Spiel hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 674147
	}
}

export default card
