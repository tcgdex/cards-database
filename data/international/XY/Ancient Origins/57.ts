import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Giratina EX",
		'fr-fr': "Giratina EX",
		'es-es': "Giratina EX",
		'it-it': "Giratina EX",
		'pt-br': "Giratina EX",
		'de-de': "Giratina EX"
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
				'en-us': "Renegade Pulse",
				'fr-fr': "Onde Renégate",
				'es-es': "Pulso Renegado",
				'it-it': "Ribellimpulso",
				'pt-br': "Pulso Renegado",
				'de-de': "Rebell-Puls"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Mega Evolution Pokémon.",
				'fr-fr': "Évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon Méga-Évolution de votre adversaire.",
				'es-es': "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por los Pokémon Megaevolución de tu rival.",
				'it-it': "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon dai Pokémon Megaevoluzione del tuo avversario.",
				'pt-br': "Impede todos os efeitos de ataques, inclusive danos, causados neste Pokémon pelo Pokémon Megaevolução do seu oponente.",
				'de-de': "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon durch Mega-Entwicklungs-Pokémon deines Gegners zugefügt werden."
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
				'en-us': "Chaos Wheel",
				'fr-fr': "Roue Chaotique",
				'es-es': "Rueda Caos",
				'it-it': "Ruotacaos",
				'pt-br': "Roda do Caos",
				'de-de': "Wirrsalsrad"
			},
			effect: {
				'en-us': "Your opponent can't play any Pokémon Tool, Special Energy, or Stadium cards from his or her hand during his or her next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de cartes Outil Pokémon, Énergie spéciale ou Stade de sa main pendant son prochain tour.",
				'es-es': "Tu rival no puede jugar ninguna carta de Herramienta, Energía Especial o Estadio de su mano durante su próximo turno.",
				'it-it': "Il tuo avversario non può giocare carte Oggetto Pokémon, Energia speciale o Stadio dalla sua mano durante il suo prossimo turno.",
				'pt-br': "O seu oponente não poderá jogar nenhum card de Ferramenta Pokémon, Energia Especial ou Estádio da própria mão durante a próxima vez de jogar.",
				'de-de': "Dein Gegner kann während seines nächsten Zuges keine Pokémon-Ausrüstungen, Spezial-Energiekarten oder Stadionkarten von seiner Hand spielen."
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
	stage: "Basic",

	thirdParty: {
		cardmarket: 284238,
		tcgplayer: 101479
	}
}

export default card
