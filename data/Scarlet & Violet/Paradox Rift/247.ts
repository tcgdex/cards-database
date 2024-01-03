import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Koko ex",
		fr: "Tokorico-ex",
		es: "Tapu Koko ex",
		it: "Tapu Koko-ex",
		pt: "Tapu Koko ex",
		de: "Kapu-Riki-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Vengeful Shock",
			fr: "Choc Vengeur",
			es: "Descarga Vengativa",
			it: "Shock Vendicativo",
			pt: "Choque Vingativo",
			de: "Racheschock"
		},

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 90 more damage, and your opponent's Active Pokémon is now Paralyzed.",
			fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 90 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 90 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 90 danni in più e il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 90 pontos de dano a mais e o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt paralysiert."
		},

		damage: "30+"
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Extreme Current",
			fr: "Courant Extrême",
			es: "Corriente Extrema",
			it: "Correntestrema",
			pt: "Corrente Extrema",
			de: "Extreme Strömung"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 180
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card