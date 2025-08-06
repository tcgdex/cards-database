import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Manaphy",
		fr: "Manaphy",
		es: "Manaphy",
		it: "Manaphy",
		pt: "Manaphy",
		de: "Manaphy"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		490,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Blessings of the Deep",
				fr: "Bénédiction des Profondeurs",
				es: "Bendiciones del Abismo",
				it: "Preghiera dagli Abissi",
				pt: "Bênçãos Abissais",
				de: "Segen der Tiefsee"
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 20 damage from 1 of your Pokémon that has any Water Energy attached to it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à l’un de vos Pokémon auquel de l’Énergie Water est attachée.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes curar 20 puntos de daño a 1 de tus Pokémon que tenga alguna Energía Water unida a él.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi curare da 20 danni uno dei tuoi Pokémon che ha Energie Water assegnate.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode curar 20 pontos de dano de 1 dos seus Pokémon que tiver alguma Energia Water ligada a ele.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 20 Schadenspunkte bei 1 deiner Pokémon heilen, an das mindestens 1 Water-Energie angelegt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
				es: "Chapoteo Ondulante",
				it: "Schizzi d’Onda",
				pt: "Onda Borrifante",
				de: "Wellenplatscher"
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

	retreat: 1,

	thirdParty: {
		cardmarket: 302163,
		tcgplayer: 146679
	}
}

export default card
