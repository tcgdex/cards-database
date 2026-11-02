import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Accelgor",
		fr: "Limaspeed",
		es: "Accelgor",
		it: "Accelgor",
		pt: "Accelgor",
		de: "Hydragil"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		617,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Shelmet",
		fr: "Escargaume",
		de: "Schnuthelm"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Retribution",
				fr: "Rétribution",
				de: "Revanche"
			},
			effect: {
				en: "If an Escavalier you had in play was Knocked Out by damage from an opponent's attack during his or her last turn, put all Energy attached to the Defending Pokémon into your opponent's hand.",
				fr: "Si un Lançargot que vous aviez en jeu a été mis K.O. par les dégâts d'une attaque de votre adversaire pendant son dernier tour, mettez toutes les Énergies attachées au Pokémon Défenseur dans la main de votre adversaire.",
				de: "Falls 1 deiner Cavalanzas im Spiel während des letzten Zuges deines Gegners durch Schaden eines gegnerischen Angriffs kampfunfähig wurde, nimmt dein Gegner alle an das Verteidigende Pokémon angelegten Energien auf seine Hand."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Signal Beam",
				fr: "Rayon signal",
				de: "Ampelleuchte"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "When its body dries out, it weakens. So it wraps a membrane around itself for protection while it spits poison.",
		de: "Da es ohne Flüssigkeit an Kraft verliert, umgibt es sich mit einer schleimigen Schutzhaut und speit flüssiges Gift."
	},

	thirdParty: {
		cardmarket: 281029,
		tcgplayer: 83461
	}
}

export default card
