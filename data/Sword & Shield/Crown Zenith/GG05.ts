import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Lapras",
		fr: "Lokhlass",
		es: "Lapras",
		it: "Lapras",
		pt: "Lapras",
		de: "Lapras"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Raging Freeze",
			fr: "Gel Acharné",
			es: "Congelación Embravecida",
			it: "Furiagelo",
			pt: "Congelamento Estarrecedor",
			de: "Wutstarre"
		},

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack from your opponent's Pokémon during their last turn, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire pendant son dernier tour, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de los Pokémon de tu rival durante su último turno, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario durante il suo ultimo turno, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque dos Pokémon do seu oponente durante o último turno dele(a), o Pokémon Ativo do seu oponente ficará Paralisado.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wurde, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card