import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Avalugg",
		fr: "Séracrawl",
		es: "Avalugg",
		it: "Avalugg",
		pt: "Avalugg",
		de: "Arktilas"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		713,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Bergmite",
		fr: "Grelaçon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
				es: "Triturar",
				it: "Sgranocchio",
				pt: "Mastigada",
				de: "Knirscher"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent’s Active Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Lanza 1 moneda. Si sala cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Wirf 1 Münze. Lege bei „Kopf“ 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Melting Floe",
				fr: "Banquise Fondante",
				es: "Témpano Deshelante",
				it: "Scioglibanchina",
				pt: "Derretendo Banquisa",
				de: "Schmelzende Scholle"
			},
			effect: {
				en: "Discard the top 3 cards of your deck. For each Water Energy card you discarded in this way, discard the top 3 cards of your opponent’s deck.",
				fr: "Défaussez les 3 cartes du dessus de votre deck. Pour chaque carte Énergie Water défaussée de cette façon, défaussez les 3 cartes du dessus du deck de votre adversaire.",
				es: "Descarta las 3 primeras cartas de tu baraja. Por cada carta de Energía Water descartada de esta manera, descarta las 3 primeras cartas de la baraja de tu rival.",
				it: "Scarta le prime tre carte del tuo mazzo. Per ogni carta Energia Water scartata in questo modo, scarta le prime tre carte del mazzo del tuo avversario.",
				pt: "Descarte 3 cards de cima do seu baralho. Para cada card de Energia Water descartado desta forma, descarte os 3 cards de cima do baralho do seu oponente.",
				de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Lege für jede Water-Energie, die du auf diese Weise auf deinen Ablagestapel gelegt hast, die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
