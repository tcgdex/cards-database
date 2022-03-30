import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Giratina EX",
		fr: "Giratina EX",
		es: "Giratina EX",
		it: "Giratina EX",
		pt: "Giratina EX",
		de: "Giratina EX"
	},

	illustrator: "PLANETA",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		487,
	],

	hp: 170,

	types: [
		"Dragon",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Renegade Pulse",
				fr: "Onde Renégate",
				es: "Pulso Renegado",
				it: "Ribellimpulso",
				pt: "Pulso Renegado",
				de: "Rebell-Puls"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Mega Evolution Pokémon.",
				fr: "Évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon Méga-Évolution de votre adversaire.",
				es: "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por los Pokémon Megaevolución de tu rival.",
				it: "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon dai Pokémon Megaevoluzione del tuo avversario.",
				pt: "Impede todos os efeitos de ataques, inclusive danos, causados neste Pokémon pelo Pokémon Megaevolução do seu oponente.",
				de: "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon durch Mega-Entwicklungs-Pokémon deines Gegners zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chaos Wheel",
				fr: "Roue Chaotique",
				es: "Rueda Caos",
				it: "Ruotacaos",
				pt: "Roda do Caos",
				de: "Wirrsalsrad"
			},
			effect: {
				en: "Your opponent can't play any Pokémon Tool, Special Energy, or Stadium cards from his or her hand during his or her next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Outil Pokémon, Énergie spéciale ou Stade de sa main pendant son prochain tour.",
				es: "Tu rival no puede jugar ninguna carta de Herramienta, Energía Especial o Estadio de su mano durante su próximo turno.",
				it: "Il tuo avversario non può giocare carte Oggetto Pokémon, Energia speciale o Stadio dalla sua mano durante il suo prossimo turno.",
				pt: "O seu oponente não poderá jogar nenhum card de Ferramenta Pokémon, Energia Especial ou Estádio da própria mão durante a próxima vez de jogar.",
				de: "Dein Gegner kann während seines nächsten Zuges keine Pokémon-Ausrüstungen, Spezial-Energiekarten oder Stadionkarten von seiner Hand spielen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic"
}

export default card
