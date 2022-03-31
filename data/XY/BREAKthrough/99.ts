import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Granbull",
		fr: "Granbull",
		es: "Granbull",
		it: "Granbull",
		pt: "Granbull",
		de: "Granbull"
	},
	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		210,
	],
	hp: 120,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Snubbull",
		fr: "Snubbull",
		es: "Snubbull",
		it: "Snubbull",
		pt: "Snubbull",
		de: "Snubbull"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Startling Bark",
				fr: "Aboiement Surprenant",
				es: "Ladrido Alarmante",
				it: "Abbaiare Improvviso",
				pt: "Latido Assustador",
				de: "Schreckgebell"
			},
			effect: {
				en: "Flip a coin. If heads, choose 3 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into his or her deck.",
				fr: "Lancez une pièce. Si c'est face, choisissez 3 cartes au hasard de la main de votre adversaire. Votre adversaire montre les cartes choisies et les mélange avec son deck.",
				es: "Lanza 1 moneda. Si sale cara, elige 3 cartas aleatorias de la mano de tu rival. Tu rival enseña esas cartas, las pone en su baraja y las baraja todas.",
				it: "Lancia una moneta. Se esce testa, scegli tre carte a caso dalla mano del tuo avversario. Il tuo avversario mostra quelle carte e le rimischia nel suo mazzo.",
				pt: "Jogue uma moeda. Se sair cara, escolha 3 cards aleatórios da mão do seu oponente. Seu oponente revela estes cards e os embaralha de volta no baralho dele ou dela.",
				de: "Wirf 1 Münze. Bei \"Kopf\" wähle 3 zufällige Karten aus der verdeckten Hand deines Gegners. Dein Gegner zeigt diese Karten und mischt sie zurück in sein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tantrum",
				fr: "Mauvaise Humeur",
				es: "Rabieta",
				it: "Collera",
				pt: "Petulância",
				de: "Wutausbruch"
			},
			effect: {
				en: "This Pokémon is now Confused.",
				fr: "Ce Pokémon est maintenant Confus.",
				es: "Este Pokémon pasa a estar Confundido.",
				it: "Questo Pokémon viene confuso.",
				pt: "Este Pokémon agora está Confuso.",
				de: "Dieses Pokémon ist jetzt verwirrt."
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
