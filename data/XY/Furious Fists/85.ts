import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Watchog",
		fr: "Miradar",
		es: "Watchog",
		it: "Watchog",
		pt: "Watchog",
		de: "Kukmarda"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		505,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif",
		es: "Patrat",
		it: "Patrat",
		pt: "Patrat",
		de: "Nagelotz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Held-Item Inspection",
				fr: "Inspection des Bagages",
				es: "Inspección de Objetos",
				it: "Ispezione Strumenti",
				pt: "Inspeção de Itens Retidos",
				de: "Itemkontrolle"
			},
			effect: {
				en: "Your opponent reveals his or her hand. Choose an Item card you find there. Your opponent shuffles that card into his or her deck.",
				fr: "Votre adversaire montre sa main. Choisissez une carte Objet que vous y trouvez. Votre adversaire mélange la carte choisie avec son deck.",
				es: "Tu rival enseña las cartas de su mano. Elige 1 carta de Objeto que encuentres entre ellas. Tu rival pone esa carta en su baraja y las baraja todas.",
				it: "Il tuo avversario mostra le carte che ha in mano. Scegli una carta Strumento presente tra quelle carte. Il tuo avversario rimischia quella carta nel suo mazzo.",
				pt: "Seu oponente revela sua própria mão. Escolha um card de Item que encontrar. Seu oponente então embaralha esse card de volta.",
				de: "Dein Gegner deckt seine Handkarten auf. Wähle 1 Itemkarte aus, die du darunter findest. Dein Gegner mischt diese Karte zurück in sein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thorough Crunch",
				fr: "Mâchouille Impitoyable",
				es: "Trituración Minuciosa",
				it: "Sgranocchio Super",
				pt: "Mastigada Vigorosa",
				de: "Gründlich Kauen"
			},
			effect: {
				en: "Flip 2 coins. For each heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Lanza 2 monedas. Por cada cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Lancia due volte una moneta. Ogni volta che esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Jogue 2 moedas. Para cada cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Wirf 2 Münzen. Lege pro \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281749
	}
}

export default card
