import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
		es: "Druddigon",
		it: "Druddigon",
		pt: "Druddigon",
		de: "Shardrago"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Water"],

		name: {
			en: "Revenge",
			fr: "Vendetta",
			es: "Desquite",
			it: "Vendetta",
			pt: "Vingança",
			de: "Vergeltung"
		},

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack from your opponent's Pokémon during their last turn, this attack does 120 more damage.",
			fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire pendant son dernier tour, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de los Pokémon de tu rival durante su último turno, este ataque hace 120 puntos de daño más.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario durante il suo ultimo turno, questo attacco infligge 120 danni in più.",
			pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque dos Pokémon do seu oponente durante o último turno dele(a), este ataque causará 120 pontos de dano a mais.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wurde, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}, {
		cost: ["Fire", "Water", "Colorless"],

		name: {
			en: "Dragon Claw",
			fr: "Draco-Griffe",
			es: "Garra Dragón",
			it: "Dragartigli",
			pt: "Garra de Dragão",
			de: "Drachenklaue"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
