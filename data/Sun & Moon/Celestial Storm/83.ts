import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Minior",
		fr: "Météno",
		es: "Minior",
		it: "Minior",
		pt: "Minior",
		de: "Meteno"
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
				en: "Falling Star",
				fr: "Étoile Déchue",
				es: "Estrella Pasajera",
				it: "Meteora",
				pt: "Estrela Fugaz",
				de: "Fallender Stern"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your hand and your Bench isn’t full, you may move your Active Pokémon to your Bench and play this Pokémon as your new Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si vous avez ce Pokémon dans votre main et si votre Banc n’est pas plein, vous pouvez déplacer votre Pokémon Actif vers votre Banc et jouer ce Pokémon comme nouveau Pokémon Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu mano y tu Banca no está llena, puedes mover tu Pokémon Activo a tu Banca y jugar este Pokémon como tu nuevo Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se hai questo Pokémon in mano e la tua panchina non è piena, puoi spostare il tuo Pokémon attivo nella tua panchina e giocare questo Pokémon come tuo nuovo Pokémon attivo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon estiver na sua mão e o seu Banco não estiver cheio, você poderá mover o seu Pokémon Ativo para o seu Banco e jogar este Pokémon como seu novo Pokémon Ativo.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn du dieses Pokémon auf deiner Hand hast und deine Bank nicht voll ist, kannst du dein Aktives Pokémon auf deine Bank verschieben und dieses Pokémon als dein neues Aktives Pokémon spielen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Swift",
				fr: "Météores",
				es: "Rapidez",
				it: "Comete",
				pt: "Ataque Veloz",
				de: "Sternschauer"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness, Resistance, or any other effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "O dano deste ataque não é afetado por Fraqueza, Resistência ou quaisquer outros efeitos no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
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



}

export default card
