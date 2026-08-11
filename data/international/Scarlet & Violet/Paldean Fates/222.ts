import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [40],
	set: Set,

	name: {
		'en-us': "Wigglytuff ex",
		'fr-fr': "Grodoudou-ex",
		'es-es': "Wigglytuff ex",
		'it-it': "Wigglytuff-ex",
		'pt-br': "Wigglytuff ex",
		'de-de': "Knuddeluff-ex"
	},

	rarity: "Shiny Ultra Rare",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
		'de-de': "Pummeluff"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Expanding Body",
			'fr-fr': "Corps en Expansion",
			'es-es': "Cuerpo Expansivo",
			'it-it': "Gonfiacorpo",
			'pt-br': "Corpo em Expansão",
			'de-de': "Expandierender Körper"
		},

		effect: {
			'en-us': "If this Pokémon has any Special Energy attached, it gets +100 HP.",
			'fr-fr': "Si au moins une Énergie spéciale est attachée à ce Pokémon, il reçoit +100 PV.",
			'es-es': "Si este Pokémon tiene alguna Energía Especial unida, obtiene 100 PS más.",
			'it-it': "Se questo Pokémon ha delle Energie speciali assegnate, ha 100 PS in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia Especial ligada a ele, receberá 100 PS a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, erhält es +100 KP."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Friend Tackle",
			'fr-fr': "Charge Amie",
			'es-es': "Placaje Amigo",
			'it-it': "Amicazione",
			'de-de': "Tacklefreund",
			'pt-br': "Investida Amistosa"
		},

		effect: {
			'en-us': "If you played a Supporter card from your hand during this turn, this attack does 90 more damage.",
			'fr-fr': "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si has jugado una carta de Partidario de tu mano durante este turno, este ataque hace 90 puntos de daño más.",
			'it-it': "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 90 danni in più.",
			'de-de': "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			'pt-br': "Se você jogou uma carta de Apoiador da sua mão durante este turno, este ataque causará 90 pontos de dano a mais."
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
				cardmarket: 751769,
				tcgplayer: 535562,
				cardtrader: 274406
			}
		},
	],

	suffix: "ex",
	illustrator: "Saki Hayashiro",

	
}

export default card
