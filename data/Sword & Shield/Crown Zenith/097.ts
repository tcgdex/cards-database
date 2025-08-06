import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [889],
	set: Set,

	name: {
		en: "Zamazenta",
		fr: "Zamazenta",
		es: "Zamazenta",
		it: "Zamazenta",
		pt: "Zamazenta",
		de: "Zamazenta"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Metal Shield",
			fr: "Bouclier Métal",
			es: "Escudo Metálico",
			it: "Metalscudo",
			pt: "Escudo Metálico",
			de: "Metallschild"
		},

		effect: {
			en: "If this Pokémon has any Energy attached, it takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Si de l'Énergie est attachée à ce Pokémon, il subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Si este Pokémon tiene alguna Energía unida a él, los ataques le hacen 30 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
			it: "Se questo Pokémon ha delle Energie assegnate, subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Se este Pokémon tiver alguma Energia ligada a ele, receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Wenn an dieses Pokémon mindestens 1 Energie angelegt ist, werden ihm durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Retaliate",
			fr: "Vengeance",
			es: "Represalia",
			it: "Nemesi",
			pt: "Retaliação",
			de: "Heimzahlung"
		},

		effect: {
			en: "If any of your Pokémon were Knocked Out during your opponent's last turn, this attack does 120 more damage.",
			fr: "Si au moins l'un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate durante el último turno de tu rival, este ataque hace 120 puntos de daño más.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO durante l'ultimo turno del tuo avversario, questo attacco infligge 120 danni in più.",
			pt: "Se algum dos seus Pokémon tiver sido Nocauteado durante o último turno do seu oponente, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners kampfunfähig wurde, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691816,
		tcgplayer: 478234
	}
}

export default card
