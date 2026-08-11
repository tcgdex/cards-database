import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [1000],
	set: Set,

	name: {
		'en-us': "Gholdengo ex",
		'fr-fr': "Gromago-ex",
		'es-es': "Gholdengo ex",
		'pt-br': "Gholdengo ex",
		'it-it': "Gholdengo-ex",
		'de-de': "Monetigo-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 260,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Gimmighoul",
		'fr-fr': "Mordudor",
		'es-es': "Gimmighoul",
		'pt-br': "Gimmighoul",
		'it-it': "Gimmighoul",
		'de-de': "Gierspenst"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Coin Bonus",
			'fr-fr': "Bonus de Pièces",
			'es-es': "Moneda de Regalo",
			'pt-br': "Bônus de Moedas",
			'it-it': "Monete Bonus",
			'de-de': "Münzbonus"
		},

		effect: {
			'en-us': "Once during your turn, you may draw a card. If this Pokémon is in the Active Spot, draw 1 more card.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez piocher une carte. Si ce Pokémon est sur le Poste Actif, piochez une carte supplémentaire.",
			'es-es': "Una vez durante tu turno, puedes robar 1 carta. Si este Pokémon está en el Puesto Activo, roba 1 carta más.",
			'pt-br': "Uma vez durante o seu turno, você poderá comprar uma carta. Se este Pokémon estiver no Campo Ativo, compre 1 carta a mais.",
			'it-it': "Una sola volta durante il tuo turno, puoi pescare una carta. Se questo Pokémon è in posizione attiva, pesca un'altra carta.",
			'de-de': "Einmal während deines Zuges kannst du 1 Karte ziehen. Wenn dieses Pokémon in der Aktiven Position ist, ziehe 1 Karte mehr."
		}
	}],

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Make It Rain",
			'fr-fr': "Ruée d'Or",
			'es-es': "Fiebre Dorada",
			'pt-br': "Chuva de Dinheiro",
			'it-it': "Corsa all'Oro",
			'de-de': "Goldrausch"
		},

		effect: {
			'en-us': "Discard any number of Basic Energy cards from your hand. This attack does 50 damage for each card you discarded in this way.",
			'fr-fr': "Défaussez de votre main le nombre voulu de cartes Énergie de base. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
			'es-es': "Descarta cualquier cantidad de cartas de Energía Básica de tu mano. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
			'pt-br': "Descarte qualquer número de cartas de Energia Básica da sua mão. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
			'it-it': "Scarta un numero qualsiasi di carte Energia base dalla tua mano. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
			'de-de': "Lege beliebig viele Basis-Energiekarten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 50 Schadenspunkte zu."
		},

		damage: "50×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	suffix: "ex",
	illustrator: "Shigenori Negishi",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805558,
				tcgplayer: 610519
			}
		},
	],
}

export default card
