import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [330],

	name: {
		en: "Flygon",
		fr: "Libégon",
		es: "Flygon",
		it: "Flygon",
		pt: "Flygon",
		de: "Libelldra"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
		es: "Vibrava",
		it: "Vibrava",
		pt: "Vibrava",
		de: "Vibrava"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Labyrinth of Sand",
				fr: "Labyrinthe de Sable",
				es: "Laberinto de Arena",
				it: "Labirinto di Sabbia",
				pt: "Labirinto de Areia",
				de: "Sandlabyrinth"
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, your opponent's Active Pokémon can't retreat.",
				fr: "Tant que ce Pokémon est sur le Poste Actif, le Pokémon Actif de votre adversaire ne peut pas battre en retraite.",
				es: "Mientras este Pokémon esté en el Puesto Activo, el Pokémon Activo de tu rival no puede retirarse.",
				it: "Fintanto che questo Pokémon è in posizione attiva, il Pokémon attivo del tuo avversario non può ritirarsi.",
				pt: "Enquanto este Pokémon estiver no Campo Ativo, o Pokémon Ativo do seu oponente não poderá recuar.",
				de: "Solange dieses Pokémon in der Aktiven Position ist, kann sich das Aktive Pokémon deines Gegners nicht zurückziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Desert Geyser",
				fr: "Geyser du Désert",
				es: "Géiser del Desierto",
				it: "Geyser nel Deserto",
				pt: "Gêiser do Deserto",
				de: "Wüstengeysir"
			},
			effect: {
				en: "If your opponent has a Stadium in play, discard it. If you discarded a Stadium in this way, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
				fr: "Si votre adversaire a un Stade en jeu, défaussez-le. Si vous avez défaussé un Stade de cette façon, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
				es: "Si tu rival tiene un Estadio en juego, descártalo. Si has descartado un Estadio de esta manera, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
				it: "Se il tuo avversario ha una carta Stadio in gioco, scartala. Se hai scartato una carta Stadio in questo modo, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
				pt: "Se o seu oponente tiver um Estádio em jogo, descarte-o. Se você descartou um Estádio deste forma, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
				de: "Wenn dein Gegner eine Stadionkarte im Spiel hat, lege sie auf seinen Ablagestapel. Wenn du auf diese Weise eine Stadionkarte auf den Ablagestapel gelegt hast, verhindere während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "This Pokémon hides in the heart of sandstorms it creates and seldom appears where people can see it."
	},

	thirdParty: {
		cardmarket: 483334
	}
}

export default card
