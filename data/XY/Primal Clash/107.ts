import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
		es: "Kingdra",
		it: "Kingdra",
		pt: "Kingdra",
		de: "Seedraking"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		230,
	],
	hp: 130,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
		es: "Seadra",
		it: "Seadra",
		pt: "Seadra",
		de: "Seemon"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Shred",
				fr: "Déchiquetage",
				es: "Hacer Trizas",
				it: "Tritatutto",
				pt: "Triturar",
				de: "Zerfetzer"
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				it: "Il danno di questo attacco non è influenzato da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "Os danos desse ataque não são afetados por qualquer efeito no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieses Angriffs wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				en: "Twister",
				fr: "Ouragan",
				es: "Ciclón",
				it: "Tornado",
				pt: "Twister",
				de: "Windhose"
			},
			effect: {
				en: "Flip 2 coins. For each heads, discard an Energy attached to your opponent's Active Pokémon. If both of them are tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
				es: "Lanza 2 monedas. Por cada cara, descarta 1 Energía unida al Pokémon Activo de tu rival. Si ambas son cruz, este ataque no hace nada.",
				it: "Lancia due volte una moneta. Ogni volta che esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario. Se esce entrambe le volte croce, questo attacco non ha effetto.",
				pt: "Jogue 2 moedas. Para cada cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente. Se ambas forem coroa, esse ataque não fará nada.",
				de: "Wirf 2 Münzen. Lege pro \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners. Wenn beide Münzen \"Zahl\" zeigen, hat dieser Angriff keine Auswirkungen."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
