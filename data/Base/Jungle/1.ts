import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Clefable",
		fr: "Mélodelfe",
		it: "Clefable",
		de: "Pixi"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		36,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
		it: "Clefairy",
		de: "Piepi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Metronome",
				fr: "Métronome",
				it: "Metronomo",
				de: "Metronom"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. Metronome copies that attack except for its Energy costs and anything else required in order to use that attack, such as discarding Energy cards. (No matter what type the Defending Pokémon is, Clefable's type is still Colorless.)",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Métronome copie cette attaque à l'exception de son coût d'Énergie et de toute autre action requise pour utiliser cette attaque, comme par exemple, défausser des cartes Énergie. (Quel que soit le type du Pokémon Défenseur, Mélodelfe demeure de type Incolore.)",
				it: "Scegli uno degli attacchi del Pokémon Difensore. Il Metronomo copia quell'attacco, a eccezione dei costi di Energia e di altre azioni necessarie per portare a termine quell'attacco, come scartare carte Energia (non importa di quale tipo sia il Pokémon Difensore, Clefable rimane sempre di tipo Incolore).",
				de: "Wähle einen der Angriffe des verteidigenden Pokémon. Metronom kopiert diesen Angriff außer seiner Energiekosten und was sonst noch für den Einsatz dieses Angriffs erforderlich ist wie z.B. das Entfernen von Energiekarten. (Unabhängig vom Typ des verteidigenden Pokémon bleibt Pixi immer noch ein farbloses Pokémon.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Minimize",
				fr: "Lilliput",
				it: "Minimizzazione",
				de: "Komprimator"
			},
			effect: {
				en: "All damage done by attacks to Clefable during your opponent's next turn is reduce by 20 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à Mélodelfe par des attaques pendant le prochain tour de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				it: "Tutto il danno che verrà inflitto a Clefable da attacchi nel prossimo turno del tuo avversario, va ridotto di 20 (dopo aver applicato Debolezza e Resistenza).",
				de: "Aller Schaden, der Pixi während des nächsten Zuges deines Gegners durch Angriffe zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz abgerechnet wurden)."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		fr: "Une sorte de petite fée très rare. Il se cache en apercevant un être humain.",
		en: "A timid fairy Pokémon that is rarely seen. It will run and hide the moment it senses people.",
		it: "È un timido Pokémon che si vede raramente; corre a nascondersi appena sente che qualche persona si avvicina.",
		de: "Ein furchtsames Feen-Pokémon, das selten zum Vorschein kommt. Sobald es Menschen wittert, läuft es davon und versteckt sich."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 273798,
				tcgplayer: 45120
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273798,
				tcgplayer: 45120
			}
		},
		{
			type: "holo",
			subtype: "missing-expansion-symbol",
		},
		{
			type: "holo",
			stamp: ["pre-release"]
		}
	],
}

export default card
