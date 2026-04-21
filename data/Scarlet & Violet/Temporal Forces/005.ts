import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [275],
	set: Set,

	name: {
		en: "Shiftry",
		fr: "Tengalice",
		es: "Shiftry",
		it: "Shiftry",
		pt: "Shiftry",
		de: "Tengulist"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
		es: "Nuzleaf",
		it: "Nuzleaf",
		pt: "Nuzleaf",
		de: "Blanas"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Expelling Tornado",
			fr: "Tornade Expulsante",
			es: "Tornado Expulsor",
			it: "Scacciatornado",
			pt: "Tornado Repulsor",
			de: "Verstoßender Tornado"
		},

		effect: {
			en: "Choose 3 of your opponent's Benched Pokémon. If you do, shuffle all of your opponent's Benched Pokémon that you didn't choose, and all cards attached to those Pokémon, into their deck.",
			fr: "Choisissez 3 des Pokémon de Banc de votre adversaire. Dans ce cas, mélangez avec son deck tous les Pokémon de Banc de votre adversaire que vous n'avez pas choisis et toutes les cartes qui leur sont attachées.",
			es: "Elige 3 de los Pokémon en Banca de tu rival. Si lo haces, pon todos los Pokémon en Banca de tu rival que no hayas elegido y todas las cartas unidas a ellos en su baraja, y barájalas todas.",
			it: "Scegli tre dei Pokémon nella panchina del tuo avversario. Se lo fai, rimischia i Pokémon nella panchina del tuo avversario che non hai scelto e tutte le carte a essi assegnate nel suo mazzo.",
			pt: "Escolha 3 dos Pokémon no Banco do seu oponente. Se fizer isto, embaralhe todos os Pokémon no Banco do seu oponente que você não escolheu, e todas as cartas ligadas àqueles Pokémon, de volta no baralho dele.",
			de: "Wähle 3 Pokémon auf der Bank deines Gegners. Wenn du das machst, mische alle Pokémon auf der Bank deines Gegners, die du nicht gewählt hast, und alle an jene Pokémon angelegten Karten in sein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Energy Loop",
			fr: "Boucle d'Énergie",
			es: "Bucle de Energía",
			it: "Circuito Energetico",
			pt: "Loop de Energia",
			de: "Energieschleife"
		},

		effect: {
			en: "Put an Energy attached to this Pokémon into your hand.",
			fr: "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			es: "Pon 1 Energía unida a este Pokémon en tu mano.",
			it: "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
			pt: "Coloque uma Energia ligada a este Pokémon na sua mão.",
			de: "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand."
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Souichirou Gunjima",

	thirdParty: {
		cardmarket: 760635
	}
}

export default card