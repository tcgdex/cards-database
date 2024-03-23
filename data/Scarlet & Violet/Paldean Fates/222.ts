import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Wigglytuff ex",
		fr: "Grodoudou-ex",
		es: "Wigglytuff ex",
		it: "Wigglytuff-ex",
		pt: "Wigglytuff ex"
	},

	rarity: "Shiny Ultra Rare",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Expanding Body",
			fr: "Corps en Expansion",
			es: "Cuerpo Expansivo",
			it: "Gonfiacorpo",
			pt: "Corpo em Expansão"
		},

		effect: {
			en: "If this Pokémon has any Special Energy attached, it gets +100 HP.",
			fr: "Si au moins une Énergie spéciale est attachée à ce Pokémon, il reçoit +100 PV.",
			es: "Si este Pokémon tiene alguna Energía Especial unida, obtiene 100 PS más.",
			it: "Se questo Pokémon ha delle Energie speciali assegnate, ha 100 PS in più.",
			pt: "Se este Pokémon tiver alguma Energia Especial ligada a ele, receberá 100 PS a mais."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Friend Tackle",
			fr: "Charge Amie",
			es: "Placaje Amigo",
			it: "Amicazione"
		},

		effect: {
			en: "If you played a Supporter card from your hand during this turn, this attack does 90 more damage.",
			fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si has jugado una carta de Partidario de tu mano durante este turno, este ataque hace 90 puntos de daño más.",
			it: "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 90 danni in più."
		},

		damage: "90+"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card