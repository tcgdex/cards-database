import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [33],
	set: Set,

	name: {
		'en-us': "Team Rocket's Nidorino",
		'fr-fr': "Nidorino de la Team Rocket",
		'de-de': "Team Rockets Nidorino",
		'it-it': "Nidorino del Team Rocket",
		'es-es': "Nidorino del Team Rocket",
		'pt-br': "Nidorino da Equipe Rocket",
		'es-mx': "Nidorino del Equipo Rocket"
	},


	illustrator: "KEIICHIRO ITO",

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Team Rocket's Nidoran♂",
		'fr-fr': "Nidoran♂ de la Team Rocket",
		'de-de': "Team Rockets Nidoran♂",
		'it-it': "Nidoran♂ del Team Rocket",
		'es-es': "Nidoran♂ del Team Rocket",
		'pt-br': "Nidoran♂ da Equipe Rocket",
		'es-mx': "Nidoran♂ del Equipo Rocket"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'de-de': "Einhämmern",
			'it-it': "Martello",
			'es-es': "Martillear",
			'pt-br': "Martelada",
			'es-mx': "Martillar"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Horn Rend",
			'fr-fr': "Corne Déchiquetante",
			'de-de': "Hornreißer",
			'it-it': "Cornilaceranti",
			'es-es': "Quebrar",
			'pt-br': "Laceração de Chifres",
			'es-mx': "Cuerno Desgarrador"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 60 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 60 danni in più.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 60 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825992,
				tcgplayer: 632926
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825992,
				tcgplayer: 632926
			}
		},
	],
}

export default card
