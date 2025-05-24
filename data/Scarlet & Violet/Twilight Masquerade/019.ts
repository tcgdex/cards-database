import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Leaves",
		fr: "Vert-de-Fer",
		es: "Ferroverdor",
		it: "Fogliaferrea",
		pt: "Folhas Férreas",
		de: "Eisenblatt"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Recovery Net",
			fr: "Filet de Récupération",
			es: "Red de Recuperación",
			it: "Rete di Ripristino",
			pt: "Rede de Recuperação",
			de: "Rückgewinnungsnetz"
		},

		effect: {
			en: "Put up to 2 Pokémon from your discard pile into your hand.",
			fr: "Ajoutez jusqu'à 2 Pokémon de votre pile de défausse à votre main.",
			es: "Pon hasta 2 Pokémon de tu pila de descartes en tu mano.",
			it: "Prendi fino a due Pokémon dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
			pt: "Coloque até 2 Pokémon da sua pilha de descarte na sua mão.",
			de: "Nimm bis zu 2 Pokémon aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Avenging Edge",
			fr: "Lame Vengeresse",
			es: "Filo Vengativo",
			it: "Lama Vendicativa",
			pt: "Gume Vingativo",
			de: "Racheklinge"
		},

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage.",
			fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 60 puntos de daño más.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 60 danni in più.",
			pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 60 pontos de dano a mais.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Mitsuhiro Arita"
}

export default card
