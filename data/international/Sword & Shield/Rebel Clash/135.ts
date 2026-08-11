import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [681],

	name: {
		'en-us': "Aegislash",
		'fr-fr': "Exagide",
		'es-es': "Aegislash",
		'it-it': "Aegislash",
		'pt-br': "Aegislash",
		'de-de': "Durengard"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Big Shield",
				'fr-fr': "Bouclier Imposant",
				'es-es': "Gran Escudo",
				'it-it': "Granscudo",
				'pt-br': "Grande Escudo",
				'de-de': "Großer Schild"
			},
			effect: {
				'en-us': "All of your Pokémon take 30 less damage from your opponent's attacks (after applying Weakness and Resistance). You can't apply more than 1 Big Shield Ability at a time.",
				'fr-fr': "Tous vos Pokémon subissent 30 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance). Vous ne pouvez utiliser qu'un talent Bouclier Imposant à la fois.",
				'es-es': "Los ataques de tu rival hacen 30 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia). No puedes aplicar más de 1 habilidad Gran Escudo a la vez.",
				'it-it': "I tuoi Pokémon subiscono 30 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza. Non puoi applicare più di un'abilità Granscudo alla volta.",
				'pt-br': "Todos os seus Pokémon recebem 30 pontos de dano a menos dos ataques do seu oponente (depois de aplicar Fraqueza e Resistência). Você não pode usar mais de 1 Habilidade Grande Escudo por vez.",
				'de-de': "Allen deinen Pokémon werden durch Attacken deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). Du kannst immer nur jeweils 1 Fähigkeit Großer Schild einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Power Edge",
				'fr-fr': "Lame Puissante",
				'es-es': "Filo Poderoso",
				'it-it': "Colpotente",
				'pt-br': "Gume Poderoso",
				'de-de': "Kraftklinge"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	hp: 140,
	types: ["Metal"],
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "In this defensive stance, Aegislash uses its steel body and a force field of spectral power to reduce the damage of any attack."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458073,
				tcgplayer: 213231
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458073,
				tcgplayer: 213231
			}
		},
	],
}

export default card
