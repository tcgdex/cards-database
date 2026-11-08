import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [959],
	set: Set,

	name: {
		'en-us': "Tinkaton",
		'fr-fr': "Forgelina",
		'es-es': "Tinkaton",
		'it-it': "Tinkaton",
		'pt-br': "Tinkaton",
		'de-de': "Granforgita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Tinkatuff",
		'fr-fr': "Forgella",
		'es-es': "Tinkatuff",
		'it-it': "Tinkatuff",
		'pt-br': "Tinkatuff",
		'de-de': "Tafforgita"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Crushing Blow",
			'fr-fr': "Coup Écrasant",
			'es-es': "Demoler",
			'it-it': "Assalto Sbaragliante",
			'pt-br': "Golpe Esmagador",
			'de-de': "Brechschlag"
		},

		effect: {
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 30
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Alloyed Hammer",
			'fr-fr': "Marteau Allié",
			'es-es': "Martillo de Aleación",
			'it-it': "Metalmartello",
			'pt-br': "Martelo de Liga Metálica",
			'de-de': "Legierter Hammer"
		},

		effect: {
			'en-us': "If this Pokémon has any {M} Energy attached, this attack does 120 more damage.",
			'fr-fr': "Si au moins une Énergie {M} est attachée à ce Pokémon, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene alguna Energía {M} unida, este ataque hace 120 puntos de daño más.",
			'it-it': "Se questo Pokémon ha delle Energie {M} assegnate, questo attacco infligge 120 danni in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia {M} ligada a ele, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 {M}-Energie angelegt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "The hammer tops 220 pounds, yet it gets swung around easily by Tinkaton as it steals whatever it pleases and carries its plunder back home.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740577,
				tcgplayer: 523751,
				cardtrader: 265182
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740577,
				tcgplayer: 523751,
				cardtrader: 265182
			}
		},
	],

	illustrator: "KEIICHIRO ITO",

	
}

export default card
