import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Tyrantrum",
		fr: "Rexillius",
		es: "Tyrantrum",
		it: "Tyrantrum",
		pt: "Tyrantrum",
		de: "Monargoras"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		697,
	],

	hp: 160,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Tyrunt",
		fr: "Ptyranidur",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tyrannical Heart",
				fr: "Cœur Tyrannique",
				es: "Corazón Tiránico",
				it: "Cuortiranno",
				pt: "Coração Tirânico",
				de: "Tyrannisches Herz"
			},
			effect: {
				en: "As long as you don’t have more Pokémon in play than your opponent, this Pokémon’s attacks do 60 more damage (before applying Weakness and Resistance), and it takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Tant que vous n’avez pas plus de Pokémon en jeu que votre adversaire, les attaques de ce Pokémon infligent 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance), et il subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Mientras no tengas más Pokémon en juego que tu rival, los ataques de este Pokémon hacen 60 puntos de daño más (antes de aplicar Debilidad y Resistencia), y los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Fintanto che non hai più Pokémon in gioco del tuo avversario, gli attacchi di questo Pokémon infliggono 60 danni in più, prima di aver applicato debolezza e resistenza, e questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Enquanto você não tiver mais Pokémon em jogo do que seu oponente, os ataques deste Pokémon causarão 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência), e este Pokémon receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Solang du nicht mehr Pokémon im Spiel hast als dein Gegner, fügen die Attacken dieses Pokémon 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden) und ihm werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
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
				en: "Discard an Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 355587,
		tcgplayer: 165721
	}
}

export default card
