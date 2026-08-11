import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Shiftry",
		'fr-fr': "Tengalice",
		'de-de': "Tengulist",
		'it-it': "Shiftry",
		'es-es': "Shiftry",
		'pt-br': "Shiftry",
		'es-mx': "Shiftry"
	},

	illustrator: "Uninori",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'de-de': "Blanas",
		'it-it': "Nuzleaf",
		'es-es': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'es-mx': "Nuzleaf"
	},
	stage: "Stage2",
	dexId: [275],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Reversing Gust",
			'fr-fr': "Bourrasque Renvoi",
			'de-de': "Umkehrböe",
			'it-it': "Raffica d'Inversione",
			'es-es': "Ráfaga Retorno",
			'pt-br': "Lufada Reversa",
			'es-mx': "Ráfaga Inversa"
		},

		effect: {
			'en-us': "Flip a coin. If heads, choose 1 of your opponent's Pokémon. Shuffle that Pokémon and all attached cards into their deck.",
			'fr-fr': "Lancez une pièce. Si c'est face, choisissez l'un des Pokémon de votre adversaire. Mélangez avec son deck ce Pokémon-là et toutes les cartes qui lui sont attachées.",
			'de-de': "Wirf 1 Münze. Wähle bei Kopf 1 Pokémon deines Gegners. Mische jenes Pokémon und alle angelegten Karten in sein Deck.",
			'it-it': "Lancia una moneta. Se esce testa, scegli uno dei Pokémon del tuo avversario. Rimischia quel Pokémon e tutte le carte a esso assegnate nel suo mazzo.",
			'es-es': "Lanza 1 moneda. Si sale cara, elige 1 de los Pokémon de tu rival. Pon ese Pokémon y todas las cartas unidas a él en su baraja, y baraja todas las cartas.",
			'pt-br': "Jogue uma moeda. Se sair cara, escolha 1 dos Pokémon do seu oponente. Embaralhe aquele Pokémon e todas as cartas ligadas a ele no baralho dele.",
			'es-mx': "Lanza 1 moneda. Si sale cara, elige 1 de los Pokémon de tu rival. Baraja ese Pokémon y todas las cartas unidas a él en su mazo."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Perplex",
			'fr-fr': "Affolement",
			'de-de': "Perplex",
			'it-it': "Sconcerto",
			'es-es': "Desconcierto",
			'pt-br': "Perplexo",
			'es-mx': "Desconcierto"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851086,
				tcgplayer: 654354
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851086,
				tcgplayer: 654354
			}
		},
	],
}

export default card
