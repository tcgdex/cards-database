import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Landorus",
		fr: "Démétéros",
		de: "Demeteros",
		es: "Landorus",
		it: "Landorus",
		pt: "Landorus",
		'es-mx': "Landorus"
	},

	illustrator: "Oku",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Incarnate Solidarity",
			fr: "Solidarité d'Avatar",
			de: "Inkarnationssolidarität",
			es: "Avatar Solidario",
			it: "Incarnazione Solidale",
			pt: "Solidariedade Materializada",
			'es-mx': "Solidaridad Encarnada"
		},

		effect: {
			en: "If you have Tornadus, Thundurus, Landorus, and Enamorus in play, ignore all Colorless Energy in the costs of attacks used by this Pokémon.",
			fr: "Si vous avez Boréas, Fulguris, Démétéros et Amovénus en jeu, ignorez toutes les Énergies Colorless dans le coût des attaques utilisées par ce Pokémon.",
			de: "Wenn du Boreos, Voltolos, Demeteros und Cupidos im Spiel hast, ignoriere alle Colorless-Energien in den Kosten der von diesem Pokémon eingesetzten Attacken.",
			es: "Si tienes a Tornadus, Thundurus, Landorus y Enamorus en juego, ignora todas las Energías Colorless en los costes de los ataques usados por este Pokémon.",
			it: "Se hai Tornadus, Thundurus, Landorus ed Enamorus in gioco, ignora tutte le Energie Colorless necessarie per gli attacchi usati da questo Pokémon.",
			pt: "Se você tiver Tornadus, Thundurus, Landorus e Enamorus em jogo, ignore todas as Energias Colorless nos custos dos ataques usados por este Pokémon.",
			'es-mx': "Si tienes Tornadus, Thundurus, Landorus y Enamorus en juego, ignora todas las Energías Colorless en los costos de los ataques usados por este Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Gaia Crush",
			fr: "Anéantissement de Gaïa",
			de: "Gaia-Zermalmer",
			es: "Golpe Gaia",
			it: "Sgretolagaia",
			pt: "Aperto de Gaia",
			'es-mx': "Aplastamiento Gaia"
		},

		effect: {
			en: "Discard a Stadium in play.",
			fr: "Défaussez un Stade en jeu.",
			de: "Lege 1 Stadion im Spiel auf den Ablagestapel.",
			es: "Descarta 1 Estadio en juego.",
			it: "Scarta una carta Stadio in gioco.",
			pt: "Descarte um Estádio em jogo.",
			'es-mx': "Descarta 1 Estadio en juego."
		},

		damage: 110,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 726530,
		cardmarket: 918877
	}
}

export default card