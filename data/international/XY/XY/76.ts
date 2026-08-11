import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Malamar",
		'fr-fr': "Sepiatroce",
		'es-es': "Malamar",
		'it-it': "Malamar",
		'pt-br': "Malamar",
		'de-de': "Calamanero"
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
		'en-us': "Inkay",
		'fr-fr': "Sepiatop",
		'es-es': "Inkay",
		'it-it': "Inkay",
		'pt-br': "Inkay",
		'de-de': "Iscalar"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Mental Trash",
				'fr-fr': "Poubelle Mentale",
				'es-es': "Basura Mental",
				'it-it': "Ipnoscarto",
				'pt-br': "Lixo Mental",
				'de-de': "Gedanklicher Abfall"
			},
			effect: {
				'en-us': "Your opponent flips 4 coins. For each tails, he or she discards a card from his or her hand.",
				'fr-fr': "Votre adversaire lance 4 pièces. Pour chaque côté pile, il défausse une carte de sa main.",
				'es-es': "Tu rival lanza 4 monedas. Por cada cruz, tu rival descarta 1 carta de su mano.",
				'it-it': "Il tuo avversario lancia quattro volte una moneta. Ogni volta che esce croce, il tuo avversario scarta una carta che ha in mano.",
				'pt-br': "Seu oponente joga 4 moedas. Para cada coroa, ele ou ela descarta um card da própria mão.",
				'de-de': "Dein Gegner wirft 4 Münzen und legt pro \"Zahl\" 1 Karte von seiner Hand auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Distortion Beam",
				'fr-fr': "Rayon de Distorsion",
				'es-es': "Rayo Distorsión",
				'it-it': "Manipolaraggio",
				'pt-br': "Raio da Distorção",
				'de-de': "Verdrehstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep. If tails, your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato. Se esce croce, il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Adormecido. Se sair coroa, o Pokémon Ativo do seu oponente ficará Confuso.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" schläft das Aktive Pokémon deines Gegners jetzt. Bei \"Zahl\" ist das Aktive Pokémon deines Gegners jetzt verwirrt."
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

	description: {
		'en-us': "It wields the most compelling hypnotic powers of any Pokémon, and it forces others to do whatever it wants.",
	},

	thirdParty: {
		cardmarket: 281413,
		tcgplayer: 87136
	}
}

export default card
