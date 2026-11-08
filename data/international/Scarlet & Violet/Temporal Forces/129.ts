import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [982],
	set: Set,

	name: {
		'en-us': "Dudunsparce",
		'fr-fr': "Deusolourdo",
		'es-es': "Dudunsparce",
		'it-it': "Dudunsparce",
		'pt-br': "Dudunsparce",
		'de-de': "Dummimisel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Dunsparce",
		'fr-fr': "Insolourdo",
		'es-es': "Dunsparce",
		'it-it': "Dunsparce",
		'pt-br': "Dunsparce",
		'de-de': "Dummisel"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Run Away Draw",
			'fr-fr': "Pioche Fuyante",
			'es-es': "Robo a la Fuga",
			'it-it': "Pesca Fugafacile",
			'pt-br': "Comprar e Dar no Pé",
			'de-de': "Angsthasenabzug"
		},

		effect: {
			'en-us': "Once during your turn, you may draw 3 cards. If you drew any cards in this way, shuffle this Pokémon and all attached cards into your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez piocher 3 cartes. Si vous piochez au moins une carte de cette façon, mélangez avec votre deck ce Pokémon et toutes les cartes qui lui sont attachées.",
			'es-es': "Una vez durante tu turno, puedes robar 3 cartas. Si has robado alguna carta de esta manera, pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			'it-it': "Una sola volta durante il tuo turno, puoi pescare tre carte. Se hai pescato delle carte in questo modo, rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá comprar 3 cartas. Se você comprou qualquer carta desta forma, embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			'de-de': "Einmal während deines Zuges kannst du 3 Karten ziehen. Wenn du auf diese Weise mindestens 1 Karte gezogen hast, mische dieses Pokémon und alle angelegten Karten in dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Land Crush",
			'fr-fr': "Écras'Terre",
			'es-es': "Aterrizaje",
			'it-it': "Schiacciaterra",
			'pt-br': "Aperto de Terra",
			'de-de': "Schollenbrecher"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760759,
				tcgplayer: 542873
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760759,
				tcgplayer: 542873
			}
		},
		{
			type: "normal",
			foil: "league",
			thirdParty: {
				cardmarket: 883689,
			}
		},
	],

	illustrator: "Teeziro",

	description: {
		'en-us': "This Pokémon uses its hard tail to make its nest by boring holes into bedrock deep underground. The nest can reach lengths of over six miles.",
	},

	thirdParty: {
		cardmarket: 760759
	}
}

export default card
