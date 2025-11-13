import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [40],
	set: Set,

	name: {
		fr: "Grodoudou-ex",
		en: "Wigglytuff ex",
		es: "Wigglytuff ex",
		it: "Wigglytuff-ex",
		pt: "Wigglytuff ex",
		de: "Knuddeluff-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Corps en Expansion",
			en: "Expanding Body",
			es: "Cuerpo Expansivo",
			it: "Gonfiacorpo",
			pt: "Corpo em Expansão",
			de: "Expandierender Körper"
		},

		effect: {
			fr: "Si au moins une Énergie spéciale est attachée à ce Pokémon, il reçoit +100 PV.",
			en: "If this Pokémon has any Special Energy attached, it gets +100 HP.",
			es: "Si este Pokémon tiene alguna Energía Especial unida, obtiene 100 PS más.",
			it: "Se questo Pokémon ha delle Energie speciali assegnate, ha 100 PS in più.",
			pt: "Se este Pokémon tiver alguma Energia Especial ligada a ele, receberá 100 PS a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, erhält es +100 KP."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Charge Amie",
			en: "Friend Tackle",
			es: "Placaje Amigo",
			it: "Amicazione",
			pt: "Investida Amistosa",
			de: "Tacklefreund"
		},

		effect: {
			fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			en: "If you played a Supporter card from your hand during this turn, this attack does 90 more damage.",
			es: "Si has jugado una carta de Partidario de tu mano durante este turno, este ataque hace 90 puntos de daño más.",
			it: "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 90 danni in più.",
			pt: "Se você jogou uma carta de Apoiador da sua mão durante este turno, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Saki Hayashiro",

	thirdParty: {
		cardmarket: 733782
	}
}

export default card