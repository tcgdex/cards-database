import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [697],

	name: {
		'en-us': "Tyrantrum",
		'fr-fr': "Rexillius",
		'es-es': "Tyrantrum",
		'es-mx': "Tyrantrum",
		'de-de': "Monargoras",
		'it-it': "Tyrantrum",
		'pt-br': "Tyrantrum"
	},

	evolveFrom: {
		'en-us': "Tyrunt",
		'fr-fr': "Ptyranidur",
		'es-es': "Tyrunt",
		'es-mx': "Tyrunt",
		'de-de': "Balgoras",
		'it-it': "Tyrunt",
		'pt-br': "Tyrunt",
	},

	illustrator: "Dsuke",
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Tyrannically Gutsy",
			'fr-fr': "Tyrannie Musclée",
			'es-es': "Coraje Tiránico",
			'es-mx': "Agallas Tiránicas",
			'de-de': "Tyrannische Tapferkeit",
			'it-it': "Baldanza Tirannica",
			'pt-br': "Tenacidade Tirânica"
		},

		effect: {
			'en-us': "If this Pokémon has any Special Energy attached, it gets +150 HP.",
			'fr-fr': "Si au moins une Énergie spéciale est attachée à ce Pokémon, il a +150 PV.",
			'es-es': "Si este Pokémon tiene alguna Energía Especial unida, obtiene 150 PS más.",
			'es-mx': "Si este Pokémon tiene alguna Energía Especial unida, obtiene 150 PS más.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, erhält es +150 KP.",
			'it-it': "Se questo Pokémon ha delle Energie speciali assegnate, ha 150 PS in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia Especial ligada a ele, receberá +150 PS."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Wreak Havoc",
			'fr-fr': "Ravages",
			'es-es': "Sembrar el Caos",
			'es-mx': "Sembrar el Caos",
			'de-de': "Chaos anrichten",
			'it-it': "Scombussolare",
			'pt-br': "Causar Estragos"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta de la baraja de tu rival.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta del mazo de tu rival.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Lege pro Kopf die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Jogue uma moeda até sair coroa. Para cada cara, descarte a carta de cima do baralho do seu oponente."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684359,
				cardmarket: 877459
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684359,
				cardmarket: 877459
			}
		},
		{
			type: "normal"
		}
	],

}

export default card
