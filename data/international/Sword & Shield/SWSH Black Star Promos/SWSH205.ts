import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [902],
	set: Set,

	name: {
		'fr-fr': "Paragruel de Hisui",
		'de-de': "Hisui-Salmagnis",
		'es-es': "Basculegion de Hisui",
		'pt-br': "Basculegion de Hisui",
		'it-it': "Basculegion di Hisui",
		'en-us': "Hisuian Basculegion"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'fr-fr': "Bargantua de Hisui",
		'de-de': "Hisui-Barschuft",
		'es-es': "Basculin de Hisui",
		'pt-br': "Basculin de Hisui",
		'it-it': "Basculin di Hisui",
		'en-us': "Hisuian Basculin"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Plongée Rancunière",
			'de-de': "Grolltaucher",
			'es-es': "Zambullida de Rencor",
			'pt-br': "Mergulho Rancoroso",
			'it-it': "Immergirancore",
			'en-us': "Grudge Dive"
		},

		effect: {
			'fr-fr': "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Confus.",
			'de-de': "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de los Pokémon de tu rival durante su último turno, este ataque hace 90 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Confundido.",
			'pt-br': "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque dos Pokémon do seu oponente durante o último turno dele(a), este ataque causará 90 pontos de dano a mais e o Pokémon Ativo do seu oponente ficará Confuso.",
			'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario durante il suo ultimo turno, questo attacco infligge 90 danni in più e il Pokémon attivo del tuo avversario viene confuso.",
			'en-us': "If any of your Pokémon were Knocked Out by damage from an attack from your opponent's Pokémon during their last turn, this attack does 90 more damage, and your opponent's Active Pokémon is now Confused."
		},

		damage: "30+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Bélier Volant",
			'de-de': "Flinke Kopfnuss",
			'es-es': "Turbocabezazo",
			'pt-br': "Cabeçada a Jato",
			'it-it': "Zuccata Jet",
			'en-us': "Jet Headbutt"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	description: {
		'en-us': "Clads itself in the souls of comrades that perished before fulfilling their goals of journeying upstream. No other species throughout all Hisui's rivers is Basculegion's equal."
	},

	thirdParty: {
		cardmarket: 611336
	}
}

export default card
