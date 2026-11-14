import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Tornadus",
		fr: "Boréas",
		de: "Boreos",
		es: "Tornadus",
		it: "Tornadus",
		pt: "Tornadus",
		'es-mx': "Tornadus"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
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
			en: "Corkscrew Dive",
			fr: "Plongée Tire-Bouchon",
			de: "Spiralsturzflug",
			es: "Picado Tirabuzón",
			it: "Picchiata Rotante",
			pt: "Mergulho Parafuso",
			'es-mx': "Descenso Sacacorchos"
		},

		effect: {
			en: "You may draw cards until you have 6 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			de: "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast.",
			es: "Puedes robar cartas hasta tener 6 cartas en tu mano.",
			it: "Puoi pescare fino ad avere sei carte in mano.",
			pt: "Você pode comprar cartas até ter 6 cartas na sua mão.",
			'es-mx': "Puedes robar cartas hasta que tengas 6 cartas en tu mano."
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 726544,
				cardmarket: 918913
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 726544,
				cardmarket: 918913
			}
		}
	],
}

export default card