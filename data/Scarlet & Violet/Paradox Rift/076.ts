import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [563],
	set: Set,

	name: {
		en: "Cofagrigus ex",
		fr: "Tutankafer-ex",
		es: "Cofagrigus ex",
		it: "Cofagrigus-ex",
		pt: "Cofagrigus ex",
		de: "Echnatoll-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
		es: "Yamask",
		it: "Yamask",
		pt: "Yamask",
		de: "Makabaja"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Gold Coffin",
			fr: "Sarcophage Doré",
			es: "Sarcófago de Oro",
			it: "Bara Dorata",
			pt: "Sarcófago Dourado",
			de: "Goldener Sarg"
		},

		effect: {
			en: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, procure por uma carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Hollow Hands",
			fr: "Mains Éthérées",
			es: "Manos Huecas",
			it: "Mani Vacue",
			pt: "Mãos Ocas",
			de: "Heimsuchende Hände"
		},

		effect: {
			en: "Put 5 damage counters on your opponent's Benched Pokémon in any way you like.",
			fr: "Placez 5 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			es: "Pon 5 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			it: "Metti cinque segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			pt: "Coloque 5 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			de: "Lege 5 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "kawayoo",

	thirdParty: {
		cardmarket: 740568
	}
}

export default card