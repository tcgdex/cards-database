import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Empiflor",
		es: "Victreebel",
		it: "Victreebel",
		pt: "Victreebel",
		de: "Sarzenia"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		71,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor",
		es: "Weepinbell",
		it: "Weepinbell",
		pt: "Weepinbell",
		de: "Ultrigaria"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wafting Scent",
				fr: "Senteur Flottante",
				es: "Aroma Flotante",
				it: "Allettaroma",
				pt: "Aroma Flutuante",
				de: "Wabernder Geruch"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Grass Energy attached to this Pokémon. If you do, your opponent's Active Pokémon is now Confused and Poisoned.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une Énergie Grass attachée à ce Pokémon. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 Energía Grass unida a este Pokémon. Si lo haces, el Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare un'Energia Grass assegnata a questo Pokémon. Se lo fai, il Pokémon attivo del tuo avversario viene confuso e paralizzato.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá descartar uma Energia Grass ligada a este Pokémon. Se fizer isso, o Pokémon Ativo do seu oponente ficará Confuso e Envenenado.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 an dieses Pokémon angelegte Grass-Energie auf deinen Ablagestapel legen. Wenn du das machst, ist das Aktive Pokémon deines Gegners jetzt verwirrt und vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale Épuisante",
				es: "Drenaje Espiral",
				it: "Assorbimento Spirale",
				pt: "Dreno Espiral",
				de: "Spiralsauger"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 de danos deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281667
	}
}

export default card
