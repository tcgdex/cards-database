import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Larry's Rufflet",
		'fr-fr': "Furaiglon d'Okuba",
		'es-es': "Rufflet de Laureano",
		'es-mx': "Rufflet de Laureano",
		'de-de': "Aokis Geronimatz",
		'it-it': "Rufflet di Ubaldo",
		'pt-br': "Rufflet do Lauro"
	},

	illustrator: "cochi8i",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Peck the Wound",
			'fr-fr': "Picpic Plaie",
			'es-es': "Picotear la Herida",
			'es-mx': "Picotear la Herida",
			'de-de': "Wundenpiekser",
			'it-it': "Beccaferita",
			'pt-br': "Bicar a Ferida"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 80 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 80 pontos de dano a mais."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		'en-us': "With its sharp claws, this Pokémon pierces its prey, and then it pecks at them. Although it also consumes berries, it’s a carnivore at heart.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869784,
			tcgplayer: 675985
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870404,
			tcgplayer: 676986
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870403,
			tcgplayer: 677126
		}
	},
],
}

export default card