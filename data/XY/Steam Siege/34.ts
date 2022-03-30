import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Clawitzer",
		fr: "Gamblast",
		es: "Clawitzer",
		it: "Clawitzer",
		pt: "Clawitzer",
		de: "Wummer"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		693,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Clauncher",
		fr: "Flingouste",
		es: "Clauncher",
		it: "Clauncher",
		pt: "Clauncher",
		de: "Scampisto"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mega Boost",
				fr: "Méga Boost",
				es: "Megaimpulso",
				it: "Megacarica",
				pt: "Megaimpulso",
				de: "Mega-Aufladung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Special Energy card from your hand to 1 of your Mega Evolution Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie spéciale de votre main à l'un de vos Pokémon Méga-Évolution.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Especial de tu mano a 1 de tus Pokémon Megaevolución.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon Megaevoluzione una carta Energia speciale dalla tua mano.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode ligar um card de Energia Especial da sua mão a 1 dos seus Pokémon de Megaevolução.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Spezial-Energiekarte von deiner Hand an 1 deiner Mega-Entwicklungs-Pokémon anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crabhammer",
				fr: "Pince-Masse",
				es: "Martillazo",
				it: "Martellata",
				pt: "Martelo Caranguejo",
				de: "Krabbhammer"
			},

			damage: 60,

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
