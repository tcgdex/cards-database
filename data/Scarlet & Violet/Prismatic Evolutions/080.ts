import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Dudunsparce",
		fr: "Deusolourdo",
		es: "Dudunsparce",
		pt: "Dudunsparce",
		it: "Dudunsparce",
		de: "Dummimisel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Run Away Draw",
			fr: "Pioche Fuyante",
			es: "Robo a la Fuga",
			pt: "Comprar e Dar no Pé",
			it: "Pesca Fugafacile",
			de: "Angsthasenabzug"
		},

		effect: {
			en: "Once during your turn, you may draw 3 cards. If you drew any cards in this way, shuffle this Pokémon and all attached cards into your deck.",
			fr: "Une fois pendant votre tour, vous pouvez piocher 3 cartes. Si vous piochez au moins une carte de cette façon, mélangez avec votre deck ce Pokémon et toutes les cartes qui lui sont attachées.",
			es: "Una vez durante tu turno, puedes robar 3 cartas. Si has robado alguna carta de esta manera, pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			pt: "Uma vez durante o seu turno, você poderá comprar 3 cartas. Se você comprou qualquer carta desta forma, embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			it: "Una sola volta durante il tuo turno, puoi pescare tre carte. Se hai pescato delle carte in questo modo, rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			de: "Einmal während deines Zuges kannst du 3 Karten ziehen. Wenn du auf diese Weise mindestens 1 Karte gezogen hast, mische dieses Pokémon und alle angelegten Karten in dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Land Crush",
			fr: "Écras'Terre",
			es: "Aterrizaje",
			pt: "Aperto de Terra",
			it: "Schiacciaterra",
			de: "Schollenbrecher"
		},

		damage: 90
	}],

	retreat: 3,
	regulationMark: "H",
	variants: {
		holo: true,
		normal: false
	}
}

export default card