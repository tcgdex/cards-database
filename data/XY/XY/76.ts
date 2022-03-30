import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
		es: "Malamar",
		it: "Malamar",
		pt: "Malamar",
		de: "Calamanero"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		687,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
		es: "Inkay",
		it: "Inkay",
		pt: "Inkay",
		de: "Iscalar"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Mental Trash",
				fr: "Poubelle Mentale",
				es: "Basura Mental",
				it: "Ipnoscarto",
				pt: "Lixo Mental",
				de: "Gedanklicher Abfall"
			},
			effect: {
				en: "Your opponent flips 4 coins. For each tails, he or she discards a card from his or her hand.",
				fr: "Votre adversaire lance 4 pièces. Pour chaque côté pile, il défausse une carte de sa main.",
				es: "Tu rival lanza 4 monedas. Por cada cruz, tu rival descarta 1 carta de su mano.",
				it: "Il tuo avversario lancia quattro volte una moneta. Ogni volta che esce croce, il tuo avversario scarta una carta che ha in mano.",
				pt: "Seu oponente joga 4 moedas. Para cada coroa, ele ou ela descarta um card da própria mão.",
				de: "Dein Gegner wirft 4 Münzen und legt pro \"Zahl\" 1 Karte von seiner Hand auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Distortion Beam",
				fr: "Rayon de Distorsion",
				es: "Rayo Distorsión",
				it: "Manipolaraggio",
				pt: "Raio da Distorção",
				de: "Verdrehstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep. If tails, your opponent's Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato. Se esce croce, il Pokémon attivo del tuo avversario viene confuso.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Adormecido. Se sair coroa, o Pokémon Ativo do seu oponente ficará Confuso.",
				de: "Wirf 1 Münze. Bei \"Kopf\" schläft das Aktive Pokémon deines Gegners jetzt. Bei \"Zahl\" ist das Aktive Pokémon deines Gegners jetzt verwirrt."
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
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
