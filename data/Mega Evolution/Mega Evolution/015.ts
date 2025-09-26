import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Shiftry",
		fr: "Tengalice",
		de: "Tengulist",
		it: "Shiftry",
		es: "Shiftry",
		pt: "Shiftry",
		'es-mx': "Shiftry"
	},

	illustrator: "Uninori",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Reversing Gust",
			fr: "Bourrasque Renvoi",
			de: "Umkehrböe",
			it: "Raffica d'Inversione",
			es: "Ráfaga Retorno",
			pt: "Lufada Reversa",
			'es-mx': "Ráfaga Inversa"
		},

		effect: {
			en: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. Shuffle that Pokémon and all attached cards into their deck.",
			fr: "Lancez une pièce. Si c'est face, choisissez l'un des Pokémon de votre adversaire. Mélangez avec son deck ce Pokémon-là et toutes les cartes qui lui sont attachées.",
			de: "Wirf 1 Münze. Wähle bei Kopf 1 Pokémon deines Gegners. Mische jenes Pokémon und alle angelegten Karten in sein Deck.",
			it: "Lancia una moneta. Se esce testa, scegli uno dei Pokémon del tuo avversario. Rimischia quel Pokémon e tutte le carte a esso assegnate nel suo mazzo.",
			es: "Lanza 1 moneda. Si sale cara, elige 1 de los Pokémon de tu rival. Pon ese Pokémon y todas las cartas unidas a él en su baraja, y baraja todas las cartas.",
			pt: "Jogue uma moeda. Se sair cara, escolha 1 dos Pokémon do seu oponente. Embaralhe aquele Pokémon e todas as cartas ligadas a ele no baralho dele.",
			'es-mx': "Lanza 1 moneda. Si sale cara, elige 1 de los Pokémon de tu rival. Baraja ese Pokémon y todas las cartas unidas a él en su mazo."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Perplex",
			fr: "Affolement",
			de: "Perplex",
			it: "Sconcerto",
			es: "Desconcierto",
			pt: "Perplexo",
			'es-mx': "Desconcierto"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654354
	}
}

export default card