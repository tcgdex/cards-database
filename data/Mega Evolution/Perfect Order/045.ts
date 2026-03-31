import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Tyrantrum",
		fr: "Rexillius",
		es: "Tyrantrum",
		de: "Monargoras",
		it: "Tyrantrum",
		pt: "Tyrantrum"
	},
	set: Set,
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		697
	],
	hp: 180,
	types: [
		"Fighting"
	],
	stage: "Stage2",
	evolveFrom: {
		en: "Tyrunt",
		fr: "Ptyranidur",
		es: "Tyrunt",
		de: "Balgoras",
		it: "Tyrunt",
		pt: "Tyrunt"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tyrannically Gutsy",
				fr: "Tyrannie Musclée",
				es: "Coraje Tiránico",
				de: "Tyrannische Tapferkeit",
				it: "Baldanza Tirannica",
				pt: "Tenacidade Tirânica"
			},
			effect: {
				en: "If this Pokémon has any Special Energy attached, it gets +150 HP.",
				fr: "Si au moins une Énergie spéciale est attachée à ce Pokémon, il a +150 PV.",
				es: "Si este Pokémon tiene alguna Energía Especial unida, obtiene 150 PS más.",
				de: "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, erhält es +150 KP.",
				it: "Se questo Pokémon ha delle Energie speciali assegnate, ha 150 PS in più.",
				pt: "Se este Pokémon tiver alguma Energia Especial ligada a ele, receberá +150 PS."
			}
		}
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless"
			],
			name: {
				en: "Wreak Havoc",
				fr: "Ravages",
				es: "Sembrar el Caos",
				de: "Chaos anrichten",
				it: "Scombussolare",
				pt: "Causar Estragos"
			},
			damage: "160",
			effect: {
				en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
				fr: "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
				es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta de la baraja de tu rival.",
				de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Lege pro Kopf die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
				it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta la prima carta del mazzo del tuo avversario.",
				pt: "Jogue uma moeda até sair coroa. Para cada cara, descarte a carta de cima do baralho do seu oponente."
			}
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "Dsuke",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "holo"
		}
	],
	thirdParty: {
		tcgplayer: 684359,
		cardmarket: 877459
	}
}

export default card
