import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [275],
	set: Set,

	name: {
		'en-us': "Shiftry",
		'fr-fr': "Tengalice",
		'es-es': "Shiftry",
		'it-it': "Shiftry",
		'pt-br': "Shiftry",
		'de-de': "Tengulist"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'es-es': "Nuzleaf",
		'it-it': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'de-de': "Blanas"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Expelling Tornado",
			'fr-fr': "Tornade Expulsante",
			'es-es': "Tornado Expulsor",
			'it-it': "Scacciatornado",
			'pt-br': "Tornado Repulsor",
			'de-de': "Verstoßender Tornado"
		},

		effect: {
			'en-us': "Choose 3 of your opponent's Benched Pokémon. If you do, shuffle all of your opponent's Benched Pokémon that you didn't choose, and all cards attached to those Pokémon, into their deck.",
			'fr-fr': "Choisissez 3 des Pokémon de Banc de votre adversaire. Dans ce cas, mélangez avec son deck tous les Pokémon de Banc de votre adversaire que vous n'avez pas choisis et toutes les cartes qui leur sont attachées.",
			'es-es': "Elige 3 de los Pokémon en Banca de tu rival. Si lo haces, pon todos los Pokémon en Banca de tu rival que no hayas elegido y todas las cartas unidas a ellos en su baraja, y barájalas todas.",
			'it-it': "Scegli tre dei Pokémon nella panchina del tuo avversario. Se lo fai, rimischia i Pokémon nella panchina del tuo avversario che non hai scelto e tutte le carte a essi assegnate nel suo mazzo.",
			'pt-br': "Escolha 3 dos Pokémon no Banco do seu oponente. Se fizer isto, embaralhe todos os Pokémon no Banco do seu oponente que você não escolheu, e todas as cartas ligadas àqueles Pokémon, de volta no baralho dele.",
			'de-de': "Wähle 3 Pokémon auf der Bank deines Gegners. Wenn du das machst, mische alle Pokémon auf der Bank deines Gegners, die du nicht gewählt hast, und alle an jene Pokémon angelegten Karten in sein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Energy Loop",
			'fr-fr': "Boucle d'Énergie",
			'es-es': "Bucle de Energía",
			'it-it': "Circuito Energetico",
			'pt-br': "Loop de Energia",
			'de-de': "Energieschleife"
		},

		effect: {
			'en-us': "Put an Energy attached to this Pokémon into your hand.",
			'fr-fr': "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			'es-es': "Pon 1 Energía unida a este Pokémon en tu mano.",
			'it-it': "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque uma Energia ligada a este Pokémon na sua mão.",
			'de-de': "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "A Pokémon that was feared as a forest guardian. It can read the foe's mind and take preemptive action.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760635,
				tcgplayer: 542650
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760635,
				tcgplayer: 542650
			}
		},
	],

	illustrator: "Souichirou Gunjima",

}

export default card