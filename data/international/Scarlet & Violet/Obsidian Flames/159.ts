import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [149],
	set: Set,

	name: {
		'fr-fr': "Dracolosse-ex",
		'en-us': "Dragonite ex",
		'es-es': "Dragonite ex",
		'it-it': "Dragonite-ex",
		'pt-br': "Dragonite ex",
		'de-de': "Dragoran-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],
	evolveFrom: {
		'fr-fr': "Draco",
		'en-us': "Dragonair",
		'es-es': "Dragonair",
		'it-it': "Dragonair",
		'pt-br': "Dragonair",
		'de-de': "Dragonir"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Cru-Ailes",
			'en-us': "Wing Attack",
			'es-es': "Ataque Ala",
			'it-it': "Attacco d'Ala",
			'pt-br': "Ataque de Asa",
			'de-de': "Flügelschlag"
		},

		damage: 70
	}, {
		cost: ["Water", "Lightning"],

		name: {
			'fr-fr': "Météore Puissant",
			'en-us': "Mighty Meteor",
			'es-es': "Cometa Poderoso",
			'it-it': "Meteorite Micidiale",
			'pt-br': "Meteoro Poderoso",
			'de-de': "Mächtiger Meteor"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 140 dégâts supplémentaires. Si c'est pile, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'en-us': "Flip a coin. If heads, this attack does 140 more damage. If tails, during your next turn, this Pokémon can't attack.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 140 puntos de daño más. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 140 danni in più. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 140 pontos de dano a mais. Se sair coroa, durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 140 Schadenspunkte mehr zu. Bei Zahl kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
		},

		damage: "140+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725239,
				tcgplayer: 509646,
				cardtrader: 255844
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
