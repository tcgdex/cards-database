import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Paragruel de Hisui",
		de: "Hisui-Salmagnis",
		es: "Basculegion de Hisui",
		pt: "Basculegion de Hisui",
		it: "Basculegion di Hisui",
		en: "Hisuian Basculegion"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		fr: "Bargantua de Hisui",
		de: "Hisui-Barschuft",
		es: "Basculin de Hisui",
		pt: "Basculin de Hisui",
		it: "Basculin di Hisui",
		en: "Hisuian Basculin"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Plongée Rancunière",
			de: "Grolltaucher",
			es: "Zambullida de Rencor",
			pt: "Mergulho Rancoroso",
			it: "Immergirancore",
			en: "Grudge Dive"
		},

		effect: {
			fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de los Pokémon de tu rival durante su último turno, este ataque hace 90 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque dos Pokémon do seu oponente durante o último turno dele(a), este ataque causará 90 pontos de dano a mais e o Pokémon Ativo do seu oponente ficará Confuso.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario durante il suo ultimo turno, questo attacco infligge 90 danni in più e il Pokémon attivo del tuo avversario viene confuso.",
			en: "If any of your Pokémon were Knocked Out by damage from an attack from your opponent's Pokémon during their last turn, this attack does 90 more damage, and your opponent's Active Pokémon is now Confused."
		},

		damage: "30+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Bélier Volant",
			de: "Flinke Kopfnuss",
			es: "Turbocabezazo",
			pt: "Cabeçada a Jato",
			it: "Zuccata Jet",
			en: "Jet Headbutt"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "F",

	description: {
		en: "Clads itself in the souls of comrades that perished before fulfilling their goals of journeying upstream. No other species throughout all Hisui's rivers is Basculegion's equal."
	},

	thirdParty: {
		cardmarket: 611336
	}
}

export default card