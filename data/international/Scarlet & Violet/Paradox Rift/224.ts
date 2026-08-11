import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [563],
	set: Set,

	name: {
		'en-us': "Cofagrigus ex",
		'fr-fr': "Tutankafer-ex",
		'es-es': "Cofagrigus ex",
		'it-it': "Cofagrigus-ex",
		'pt-br': "Cofagrigus ex",
		'de-de': "Echnatoll-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Yamask",
		'fr-fr': "Tutafeh",
		'es-es': "Yamask",
		'it-it': "Yamask",
		'pt-br': "Yamask",
		'de-de': "Makabaja"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Gold Coffin",
			'fr-fr': "Sarcophage Doré",
			'es-es': "Sarcófago de Oro",
			'it-it': "Bara Dorata",
			'pt-br': "Sarcófago Dourado",
			'de-de': "Goldener Sarg"
		},

		effect: {
			'en-us': "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, search your deck for a card and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, procure por uma carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Hollow Hands",
			'fr-fr': "Mains Éthérées",
			'es-es': "Manos Huecas",
			'it-it': "Mani Vacue",
			'pt-br': "Mãos Ocas",
			'de-de': "Heimsuchende Hände"
		},

		effect: {
			'en-us': "Put 5 damage counters on your opponent's Benched Pokémon in any way you like.",
			'fr-fr': "Placez 5 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			'es-es': "Pon 5 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			'it-it': "Metti cinque segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			'pt-br': "Coloque 5 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			'de-de': "Lege 5 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740767,
				tcgplayer: 523905,
				cardtrader: 265344
			}
		},
	],

	suffix: "ex",
	illustrator: "Eske Yoshinob",

	
}

export default card
