import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Minior",
		'fr-fr': "Météno",
		'es-es': "Minior",
		'it-it': "Minior",
		'pt-br': "Minior",
		'de-de': "Meteno"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		774,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Falling Star",
				'fr-fr': "Étoile Déchue",
				'es-es': "Estrella Pasajera",
				'it-it': "Meteora",
				'pt-br': "Estrela Fugaz",
				'de-de': "Fallender Stern"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is in your hand and your Bench isn’t full, you may move your Active Pokémon to your Bench and play this Pokémon as your new Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si vous avez ce Pokémon dans votre main et si votre Banc n’est pas plein, vous pouvez déplacer votre Pokémon Actif vers votre Banc et jouer ce Pokémon comme nouveau Pokémon Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu mano y tu Banca no está llena, puedes mover tu Pokémon Activo a tu Banca y jugar este Pokémon como tu nuevo Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se hai questo Pokémon in mano e la tua panchina non è piena, puoi spostare il tuo Pokémon attivo nella tua panchina e giocare questo Pokémon come tuo nuovo Pokémon attivo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon estiver na sua mão e o seu Banco não estiver cheio, você poderá mover o seu Pokémon Ativo para o seu Banco e jogar este Pokémon como seu novo Pokémon Ativo.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst), wenn du dieses Pokémon auf deiner Hand hast und deine Bank nicht voll ist, kannst du dein Aktives Pokémon auf deine Bank verschieben und dieses Pokémon als dein neues Aktives Pokémon spielen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores",
				'es-es': "Rapidez",
				'it-it': "Comete",
				'pt-br': "Ataque Veloz",
				'de-de': "Sternschauer"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Weakness, Resistance, or any other effects on your opponent’s Active Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
				'es-es': "El daño de este ataque no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en el Pokémon Activo de tu rival.",
				'it-it': "I danni di questo attacco non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "O dano deste ataque não é afetado por Fraqueza, Resistência ou quaisquer outros efeitos no Pokémon Ativo do seu oponente.",
				'de-de': "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Strong impacts can knock it out of its shell. This Pokémon was born from mutated nanoparticles.",
	},

	thirdParty: {
		cardmarket: 361328,
		tcgplayer: 170905
	}
}

export default card
