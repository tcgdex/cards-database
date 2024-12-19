import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [85],
	set: Set,

	name: {
		en: "Dodrio",
		fr: "Dodrio",
		es: "Dodrio",
		it: "Dodrio",
		pt: "Dodrio",
		de: "Dodri"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Zooming Draw",
			fr: "Pioche en Trombe",
			es: "Robo Presuroso",
			it: "Pesca Sfrecciante",
			pt: "Zumbido de Compra",
			de: "Zackiger Zug"
		},

		effect: {
			en: "Once during your turn, you may put 1 damage counter on this Pokémon. If you do, draw a card.",
			fr: "Une fois pendant votre tour, vous pouvez placer un marqueur de dégâts sur ce Pokémon. Dans ce cas, piochez une carte.",
			es: "Una vez durante tu turno, puedes poner 1 contador de daño en este Pokémon. Si lo haces, roba 1 carta.",
			it: "Una sola volta durante il tuo turno, puoi mettere un segnalino danno su questo Pokémon. Se lo fai, pesca una carta.",
			pt: "Uma vez durante o seu turno, você poderá colocar 1 contador de dano neste Pokémon. Se fizer isto, compre uma carta.",
			de: "Einmal während deines Zuges kannst du 1 Schadensmarke auf dieses Pokémon legen. Wenn du das machst, ziehe 1 Karte."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Ballistic Beak",
			fr: "Bec Déchaîné",
			es: "Pico Balístico",
			it: "Becco Infuriato",
			pt: "Bico-bala",
			de: "Schnabelausraster"
		},

		effect: {
			en: "This attack does 30 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	evolveFrom: {
		en: "Doduo",
		fr: "Doduo",
		es: "Doduo",
		it: "Doduo",
		pt: "Doduo",
		de: "Dodu"
	}
}

export default card