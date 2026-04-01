import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Tyrantrum",
		fr: "Rexillius",
		es: "Tyrantrum",
		'es-mx': "Tyrantrum",
		de: "Monargoras",
		it: "Tyrantrum",
		pt: "Tyrantrum"
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
			en: "Tyrannically Gutsy",
			fr: "Tyrannie Musclée",
			es: "Coraje Tiránico",
			'es-mx': "Agallas Tiránicas",
			de: "Tyrannische Tapferkeit",
			it: "Baldanza Tirannica",
			pt: "Tenacidade Tirânica"
		},

		effect: {
			en: "If this Pokémon has any Special Energy attached, it gets +150 HP.",
			fr: "Si au moins une Énergie spéciale est attachée à ce Pokémon, il a +150 PV.",
			es: "Si este Pokémon tiene alguna Energía Especial unida, obtiene 150 PS más.",
			'es-mx': "Si este Pokémon tiene alguna Energía Especial unida, obtiene 150 PS más.",
			de: "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, erhält es +150 KP.",
			it: "Se questo Pokémon ha delle Energie speciali assegnate, ha 150 PS in più.",
			pt: "Se este Pokémon tiver alguma Energia Especial ligada a ele, receberá +150 PS."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Wreak Havoc",
			fr: "Ravages",
			es: "Sembrar el Caos",
			'es-mx': "Sembrar el Caos",
			de: "Chaos anrichten",
			it: "Scombussolare",
			pt: "Causar Estragos"
		},

		effect: {
			en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
			es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta de la baraja de tu rival.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta del mazo de tu rival.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Lege pro Kopf die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta la prima carta del mazzo del tuo avversario.",
			pt: "Jogue uma moeda até sair coroa. Para cada cara, descarte a carta de cima do baralho do seu oponente."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "J"
}

export default card