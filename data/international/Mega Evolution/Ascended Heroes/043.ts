import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Feraligatr ex",
		'fr-fr': "Méga-Aligatueur-ex",
		'es-es': "Mega-Feraligatr ex",
		'es-mx': "Mega-Feraligatr ex",
		'de-de': "Mega-Impergator-ex",
		'it-it': "Mega Feraligatr-ex",
		'pt-br': "Mega Feraligatr ex"
	},
	evolveFrom: {
		'en-us': "Croconaw",
		'de-de': "Tyracroc",
		'es-es': "Croconaw",
		'fr-fr': "Crocrodil",
		'it-it': "Croconaw",
		'pt-br': "Croconaw",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [160],
	hp: 370,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Mortal Crunch",
			'fr-fr': "Mâchouille Mortelle",
			'es-es': "Trituración Mortífera",
			'es-mx': "Trituración Mortífera",
			'de-de': "Letalknirscher",
			'it-it': "Sgranocchio Letale",
			'pt-br': "Mastigada Mortal"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 200 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 200 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 200 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 200 puntos de daño más.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 200 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 200 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 200 pontos de dano a mais."
		},

		damage: "200+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869654,
				tcgplayer: 675855
			}
		}
	],
}

export default card
