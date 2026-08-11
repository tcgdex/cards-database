import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Walrein",
		'fr-fr': "Kaimorse",
		'es-es': "Walrein",
		'it-it': "Walrein",
		'pt-br': "Walrein",
		'de-de': "Walraisa"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		365,
	],

	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Sealeo",
		'fr-fr': "Phogleur",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Cold Snap",
				'fr-fr': "Vague de Froid",
				'es-es': "Ola de Frío",
				'it-it': "Gelo Istantaneo",
				'pt-br': "Friagem Súbita",
				'de-de': "Kälteeinbruch"
			},
			effect: {
				'en-us': "Your opponent can’t play any Trainer cards from their hand during their next turn. If 1 of your Pokémon used Cold Snap during your last turn, this attack can’t be used.",
				'fr-fr': "Votre adversaire ne peut pas jouer de carte Dresseur de sa main pendant son prochain tour. Si l’un de vos Pokémon a utilisé Vague de Froid pendant votre dernier tour, cette attaque ne peut pas être utilisée.",
				'es-es': "Tu rival no puede jugar ninguna carta de Entrenador de su mano durante su próximo turno. Si 1 de tus Pokémon usó Ola de Frío durante tu último turno, este ataque no se puede usar.",
				'it-it': "Il tuo avversario non può giocare le carte Allenatore che ha in mano durante il suo prossimo turno. Se uno dei tuoi Pokémon ha usato Gelo Istantaneo durante il tuo ultimo turno, questo attacco non può essere usato.",
				'pt-br': "Seu oponente não poderá jogar nenhuma carta de Treinador da própria mão durante a próxima vez dele(a) jogar. Se 1 dos seus Pokémon usou Friagem Súbita durante a sua última vez de jogar, este ataque não poderá ser usado.",
				'de-de': "Dein Gegner kann während seines nächsten Zuges keine Trainerkarten aus seiner Hand spielen. Wenn eins deiner Pokémon während deines letzten Zuges Kälteeinbruch eingesetzt hat, kann diese Attacke nicht eingesetzt werden."
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blizzard",
				'fr-fr': "Blizzard",
				'es-es': "Ventisca",
				'it-it': "Bora",
				'pt-br': "Nevasca",
				'de-de': "Blizzard"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a ciascun Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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

	retreat: 4,

	description: {
		'en-us': "It shatters ice with its big tusks. Its thick blubber repels not only the cold, but also enemy attacks.",
	},

	thirdParty: {
		cardmarket: 407909,
		tcgplayer: 201228
	}
}

export default card
