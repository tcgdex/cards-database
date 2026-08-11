import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Stoutland",
		'fr-fr': "Mastouffe",
		'es-es': "Stoutland",
		'it-it': "Stoutland",
		'pt-br': "Stoutland",
		'de-de': "Bissbark"
	},

	illustrator: "Mizue",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		508,
	],

	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Herdier",
		'fr-fr': "Ponchien",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Arf Arf Bark",
				'fr-fr': "Ouaf Ouaf",
				'es-es': "Ladrido Guau Guau",
				'it-it': "Fare Bau Bau",
				'pt-br': "Latido Au-au",
				'de-de': "Wuff-wuff-Bellen"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard an Energy from your opponent’s Active Pokémon. If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent’s attack, you may discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez défausser une Énergie du Pokémon Actif de votre adversaire. Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d’une attaque de votre adversaire, vous pouvez défausser une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes descartar 1 Energía del Pokémon Activo de tu rival. Si este Pokémon es tu Pokémon Activo y queda Fuera de Combate por el daño de un ataque de tu rival, puedes descartar 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scartare un’Energia assegnata al Pokémon attivo del tuo avversario. Se questo Pokémon è il tuo Pokémon attivo e viene messo KO dai danni inflitti da un attacco del tuo avversario, puoi scartare un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode descartar 1 Energia do Pokémon Ativo do seu oponente. Se este Pokémon for o seu Pokémon Ativo e ele for Nocauteado pelo dano de um ataque do seu oponente, você poderá descartar 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel legen. Wenn dieses Pokémon dein Aktives Pokémon ist und durch Schaden einer Attacke deines Gegners kampfunfähig wird, kannst du 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Overrun",
				'fr-fr': "Dépassement",
				'es-es': "Rebasar",
				'it-it': "Oltrepassare",
				'pt-br': "Atropelar",
				'de-de': "Überrennen"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It pays no mind to the cold, thanks to its long warm coat. Stoutland in Alola look a little uncomfortable.",
	},

	thirdParty: {
		cardmarket: 398519,
		tcgplayer: 201359
	}
}

export default card
