import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Basculegion",
		fr: "Paragruel de Hisui",
		es: "Basculegion de Hisui",
		it: "Basculegion di Hisui",
		pt: "Basculegion de Hisui",
		de: "Hisui-Salmagnis"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Hisuian Basculin",
		fr: "Bargantua de Hisui",
		es: "Basculin de Hisui",
		it: "Basculin di Hisui",
		pt: "Basculin de Hisui",
		de: "Hisui-Barschuft"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Grudge Dive",
			fr: "Plongée Rancunière",
			es: "Zambullida de Rencor",
			it: "Immergirancore",
			pt: "Mergulho Rancoroso",
			de: "Grolltaucher"
		},

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack from your opponent's Pokémon during their last turn, this attack does 90 more damage, and your opponent's Active Pokémon is now Confused.",
			fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de los Pokémon de tu rival durante su último turno, este ataque hace 90 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario durante il suo ultimo turno, questo attacco infligge 90 danni in più e il Pokémon attivo del tuo avversario viene confuso.",
			pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque dos Pokémon do seu oponente durante o último turno dele(a), este ataque causará 90 pontos de dano a mais e o Pokémon Ativo do seu oponente ficará Confuso.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: "30+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Jet Headbutt",
			fr: "Bélier Volant",
			es: "Turbocabezazo",
			it: "Zuccata Jet",
			pt: "Cabeçada a Jato",
			de: "Flinke Kopfnuss"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658583
	}
}

export default card