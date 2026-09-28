import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Ditto",
		es: "Ditto",
	},

	illustrator: "Ounishi",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [132],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Surprisingly Transform",
			es: "Transformación Sorprendente",
		},

		effect: {
			en: "Flip a coin. If heads, search your deck for a Pokémon and switch it with this Pokémon. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon. If you switched a Pokémon in this way, put this card into your deck. Then, shuffle your deck.",
			es: "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 Pokémon y cámbialo por este Pokémon. Todas las cartas unidas a este Pokémon, los contadores de daño, las Condiciones Especiales, los turnos de juego y todos los demás efectos permanecen en el nuevo Pokémon. Si has cambiado un Pokémon de esta manera, pon esta carta en tu baraja. Después, baraja las cartas de tu baraja.",
		}
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895619,
				tcgplayer: 713287
			}
		}
	],
}

export default card
