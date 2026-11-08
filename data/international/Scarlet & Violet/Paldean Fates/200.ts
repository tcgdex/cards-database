import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [85],
	set: Set,

	name: {
		'en-us': "Dodrio",
		'fr-fr': "Dodrio",
		'es-es': "Dodrio",
		'it-it': "Dodrio",
		'pt-br': "Dodrio",
		'de-de': "Dodri"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Doduo",
		'fr-fr': "Doduo",
		'es-es': "Doduo",
		'it-it': "Doduo",
		'pt-br': "Doduo",
		'de-de': "Dodu"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Zooming Draw",
			'fr-fr': "Pioche en Trombe",
			'es-es': "Robo Presuroso",
			'it-it': "Pesca Sfrecciante",
			'pt-br': "Zumbido de Compra",
			'de-de': "Zackiger Zug"
		},

		effect: {
			'en-us': "Once during your turn, you may put 1 damage counter on this Pokémon. If you do, draw a card.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez placer un marqueur de dégâts sur ce Pokémon. Dans ce cas, piochez une carte.",
			'es-es': "Una vez durante tu turno, puedes poner 1 contador de daño en este Pokémon. Si lo haces, roba 1 carta.",
			'it-it': "Una sola volta durante il tuo turno, puoi mettere un segnalino danno su questo Pokémon. Se lo fai, pesca una carta.",
			'pt-br': "Uma vez durante o seu turno, você poderá colocar 1 contador de dano neste Pokémon. Se fizer isto, compre uma carta.",
			'de-de': "Einmal während deines Zuges kannst du 1 Schadensmarke auf dieses Pokémon legen. Wenn du das machst, ziehe 1 Karte."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ballistic Beak",
			'fr-fr': "Bec Déchaîné",
			'es-es': "Pico Balístico",
			'it-it': "Becco Infuriato",
			'pt-br': "Bico-bala",
			'de-de': "Schnabelausraster"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
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

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751739,
				tcgplayer: 535185,
				cardtrader: 274385
			}
		},
	],

	illustrator: "nagimiso",

	description: {
		'en-us': "An odd species that is rarely found. The three heads respectively represent joy, sadness, and anger.",
	},

}

export default card
