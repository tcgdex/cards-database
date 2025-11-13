import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [1000],
	set: Set,

	name: {
		en: "Gholdengo ex",
		fr: "Gromago-ex",
		es: "Gholdengo ex",
		it: "Gholdengo-ex",
		pt: "Gholdengo ex",
		de: "Monetigo-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Metal"],
	evolveFrom: {
		en: "Gimmighoul",
		fr: "Mordudor",
		es: "Gimmighoul",
		it: "Gimmighoul",
		pt: "Gimmighoul",
		de: "Gierspenst"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Coin Bonus",
			fr: "Bonus de Pièces",
			es: "Moneda de Regalo",
			it: "Monete Bonus",
			pt: "Bônus de Moedas",
			de: "Münzbonus"
		},

		effect: {
			en: "Once during your turn, you may draw a card. If this Pokémon is in the Active Spot, draw 1 more card.",
			fr: "Une fois pendant votre tour, vous pouvez piocher une carte. Si ce Pokémon est sur le Poste Actif, piochez une carte supplémentaire.",
			es: "Una vez durante tu turno, puedes robar 1 carta. Si este Pokémon está en el Puesto Activo, roba 1 carta más.",
			it: "Una sola volta durante il tuo turno, puoi pescare una carta. Se questo Pokémon è in posizione attiva, pesca un'altra carta.",
			pt: "Uma vez durante o seu turno, você poderá comprar uma carta. Se este Pokémon estiver no Campo Ativo, compre 1 carta a mais.",
			de: "Einmal während deines Zuges kannst du 1 Karte ziehen. Wenn dieses Pokémon in der Aktiven Position ist, ziehe 1 Karte mehr."
		}
	}],

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Make It Rain",
			fr: "Ruée d'Or",
			es: "Fiebre Dorada",
			it: "Corsa all'Oro",
			pt: "Chuva de Dinheiro",
			de: "Goldrausch"
		},

		effect: {
			en: "Discard any number of Basic Energy cards from your hand. This attack does 50 damage for each card you discarded in this way.",
			fr: "Défaussez de votre main le nombre voulu de cartes Énergie de base. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
			es: "Descarta cualquier cantidad de cartas de Energía Básica de tu mano. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
			it: "Scarta un numero qualsiasi di carte Energia base dalla tua mano. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
			pt: "Descarte qualquer número de cartas de Energia Básica da sua mão. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
			de: "Lege beliebig viele Basis-Energiekarten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 50 Schadenspunkte zu."
		},

		damage: "50×"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "takuyoa",

	thirdParty: {
		cardmarket: 740677
	}
}

export default card