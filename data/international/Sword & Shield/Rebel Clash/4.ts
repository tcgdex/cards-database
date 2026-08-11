import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [123],

	name: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'es-es': "Scyther",
		'it-it': "Scyther",
		'pt-br': "Scyther",
		'de-de': "Sichlor"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Swords Dance",
				'fr-fr': "Danse Lames",
				'es-es': "Danza Espada",
				'it-it': "Danzaspada",
				'pt-br': "Dança das Espadas",
				'de-de': "Schwerttanz"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Blinding Scythe attack does 70 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l'attaque Pulvérisation Aveuglante de ce Pokémon inflige 70 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, el ataque Guadaña Cegadora de este Pokémon hace 70 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, l'attacco Falceaccecante di questo Pokémon infligge 70 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante o seu próximo turno, o ataque Foice Ofuscante deste Pokémon causará 70 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügt die Attacke Blendende Sense dieses Pokémon 70 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Blinding Scythe",
				'fr-fr': "Pulvérisation Aveuglante",
				'es-es': "Guadaña Cegadora",
				'it-it': "Falceaccecante",
				'pt-br': "Foice Ofuscante",
				'de-de': "Blendende Sense"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 80,
	types: ["Grass"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its two sharp scythes are more than just weapons. It uses them with dexterity to dress its prey before eating."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457398,
				tcgplayer: 213074
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457398,
				tcgplayer: 213074
			}
		},
	],
}

export default card
