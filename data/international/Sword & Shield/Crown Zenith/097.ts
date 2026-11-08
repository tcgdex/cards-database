import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [889],
	set: Set,

	name: {
		'en-us': "Zamazenta",
		'fr-fr': "Zamazenta",
		'es-es': "Zamazenta",
		'it-it': "Zamazenta",
		'pt-br': "Zamazenta",
		'de-de': "Zamazenta"
	},

	illustrator: "GIDORA",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Metal Shield",
			'fr-fr': "Bouclier Métal",
			'es-es': "Escudo Metálico",
			'it-it': "Metalscudo",
			'pt-br': "Escudo Metálico",
			'de-de': "Metallschild"
		},

		effect: {
			'en-us': "If this Pokémon has any Energy attached, it takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Si de l'Énergie est attachée à ce Pokémon, il subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Si este Pokémon tiene alguna Energía unida a él, los ataques le hacen 30 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
			'it-it': "Se questo Pokémon ha delle Energie assegnate, subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Se este Pokémon tiver alguma Energia ligada a ele, receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Energie angelegt ist, werden ihm durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Retaliate",
			'fr-fr': "Vengeance",
			'es-es': "Represalia",
			'it-it': "Nemesi",
			'pt-br': "Retaliação",
			'de-de': "Heimzahlung"
		},

		effect: {
			'en-us': "If any of your Pokémon were Knocked Out during your opponent's last turn, this attack does 120 more damage.",
			'fr-fr': "Si au moins l'un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate durante el último turno de tu rival, este ataque hace 120 puntos de daño más.",
			'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO durante l'ultimo turno del tuo avversario, questo attacco infligge 120 danni in più.",
			'pt-br': "Se algum dos seus Pokémon tiver sido Nocauteado durante o último turno do seu oponente, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners kampfunfähig wurde, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Its ability to deflect any attack led to it being known as the Fighting Master's Shield. It was feared and respected by all.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691816,
				tcgplayer: 478234
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691816,
				tcgplayer: 478234
			}
		},
	],
}

export default card
