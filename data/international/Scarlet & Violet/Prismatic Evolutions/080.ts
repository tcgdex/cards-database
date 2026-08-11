import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [982],
	set: Set,

	name: {
		'en-us': "Dudunsparce",
		'fr-fr': "Deusolourdo",
		'es-es': "Dudunsparce",
		'pt-br': "Dudunsparce",
		'it-it': "Dudunsparce",
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
		'pt-br': "Dunsparce",
		'it-it': "Dunsparce",
		'de-de': "Dummisel"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Run Away Draw",
			'fr-fr': "Pioche Fuyante",
			'es-es': "Robo a la Fuga",
			'pt-br': "Comprar e Dar no Pé",
			'it-it': "Pesca Fugafacile",
			'de-de': "Angsthasenabzug"
		},

		effect: {
			'en-us': "Once during your turn, you may draw 3 cards. If you drew any cards in this way, shuffle this Pokémon and all attached cards into your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez piocher 3 cartes. Si vous piochez au moins une carte de cette façon, mélangez avec votre deck ce Pokémon et toutes les cartes qui lui sont attachées.",
			'es-es': "Una vez durante tu turno, puedes robar 3 cartas. Si has robado alguna carta de esta manera, pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			'pt-br': "Uma vez durante o seu turno, você poderá comprar 3 cartas. Se você comprou qualquer carta desta forma, embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			'it-it': "Una sola volta durante il tuo turno, puoi pescare tre carte. Se hai pescato delle carte in questo modo, rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			'de-de': "Einmal während deines Zuges kannst du 3 Karten ziehen. Wenn du auf diese Weise mindestens 1 Karte gezogen hast, mische dieses Pokémon und alle angelegten Karten in dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Land Crush",
			'fr-fr': "Écras'Terre",
			'es-es': "Aterrizaje",
			'pt-br': "Aperto de Terra",
			'it-it': "Schiacciaterra",
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

	illustrator: "Teeziro",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805471,
				tcgplayer: 610435
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805471,
				tcgplayer: 610435
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806522,
				tcgplayer: 610594
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806523,
				tcgplayer: 610695
			}
		},
	],
}

export default card
