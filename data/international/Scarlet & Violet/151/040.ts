import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [40],
	set: Set,

	name: {
		'fr-fr': "Grodoudou-ex",
		'en-us': "Wigglytuff ex",
		'es-es': "Wigglytuff ex",
		'it-it': "Wigglytuff-ex",
		'pt-br': "Wigglytuff ex",
		'de-de': "Knuddeluff-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Rondoudou",
		'en-us': "Jigglypuff",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
		'de-de': "Pummeluff"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Corps en Expansion",
			'en-us': "Expanding Body",
			'es-es': "Cuerpo Expansivo",
			'it-it': "Gonfiacorpo",
			'pt-br': "Corpo em Expansão",
			'de-de': "Expandierender Körper"
		},

		effect: {
			'fr-fr': "Si au moins une Énergie spéciale est attachée à ce Pokémon, il reçoit +100 PV.",
			'en-us': "If this Pokémon has any Special Energy attached, it gets +100 HP.",
			'es-es': "Si este Pokémon tiene alguna Energía Especial unida, obtiene 100 PS más.",
			'it-it': "Se questo Pokémon ha delle Energie speciali assegnate, ha 100 PS in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia Especial ligada a ele, receberá 100 PS a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, erhält es +100 KP."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Charge Amie",
			'en-us': "Friend Tackle",
			'es-es': "Placaje Amigo",
			'it-it': "Amicazione",
			'pt-br': "Investida Amistosa",
			'de-de': "Tacklefreund"
		},

		effect: {
			'fr-fr': "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			'en-us': "If you played a Supporter card from your hand during this turn, this attack does 90 more damage.",
			'es-es': "Si has jugado una carta de Partidario de tu mano durante este turno, este ataque hace 90 puntos de daño más.",
			'it-it': "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 90 danni in più.",
			'pt-br': "Se você jogou uma carta de Apoiador da sua mão durante este turno, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733635,
				tcgplayer: 516145,
				cardtrader: 261104
			}
		},
	],

	suffix: "ex",
	illustrator: "Saki Hayashiro",

	
}

export default card
