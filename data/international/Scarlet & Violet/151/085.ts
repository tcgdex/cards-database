import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [85],
	set: Set,

	name: {
		'fr-fr': "Dodrio",
		'en-us': "Dodrio",
		'es-es': "Dodrio",
		'it-it': "Dodrio",
		'pt-br': "Dodrio",
		'de-de': "Dodri"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Doduo",
		'en-us': "Doduo",
		'es-es': "Doduo",
		'it-it': "Doduo",
		'pt-br': "Doduo",
		'de-de': "Dodu"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Pioche en Trombe",
			'en-us': "Zooming Draw",
			'es-es': "Robo Presuroso",
			'it-it': "Pesca Sfrecciante",
			'pt-br': "Zumbido de Compra",
			'de-de': "Zackiger Zug"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez placer un marqueur de dégâts sur ce Pokémon. Dans ce cas, piochez une carte.",
			'en-us': "Once during your turn, you may put 1 damage counter on this Pokémon. If you do, draw a card.",
			'es-es': "Una vez durante tu turno, puedes poner 1 contador de daño en este Pokémon. Si lo haces, roba 1 carta.",
			'it-it': "Una sola volta durante il tuo turno, puoi mettere un segnalino danno su questo Pokémon. Se lo fai, pesca una carta.",
			'pt-br': "Uma vez durante o seu turno, você poderá colocar 1 contador de dano neste Pokémon. Se fizer isto, compre uma carta.",
			'de-de': "Einmal während deines Zuges kannst du 1 Schadensmarke auf dieses Pokémon legen. Wenn du das machst, ziehe 1 Karte."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Bec Déchaîné",
			'en-us': "Ballistic Beak",
			'es-es': "Pico Balístico",
			'it-it': "Becco Infuriato",
			'pt-br': "Bico-bala",
			'de-de': "Schnabelausraster"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			'en-us': "This attack does 30 more damage for each damage counter on this Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "An odd species that is rarely found. The three heads respectively represent joy, sadness, and anger.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733680,
				tcgplayer: 516654,
				cardtrader: 261227
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733680,
				tcgplayer: 516654,
				cardtrader: 261227
			}
		},
	],

	illustrator: "Anesaki Dynamic",

	
}

export default card
