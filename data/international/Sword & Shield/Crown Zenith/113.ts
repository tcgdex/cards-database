import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [486],
	set: Set,

	name: {
		'en-us': "Regigigas V",
		'fr-fr': "Regigigas V",
		'es-es': "Regigigas V",
		'it-it': "Regigigas V",
		'pt-br': "Regigigas V",
		'de-de': "Regigigas V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 240,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Angry Whack",
			'fr-fr': "Coup Furieux",
			'es-es': "Golpe Iracundo",
			'it-it': "Randellata Furiosa",
			'pt-br': "Pancadão Nervoso",
			'de-de': "Wütender Klaps"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on this Pokémon. This Pokémon is now Confused.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon. Ce Pokémon est maintenant Confus.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon. Este Pokémon pasa a estar Confundido.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon. Questo Pokémon viene confuso.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon. Este Pokémon agora está Confuso.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu. Dieses Pokémon ist jetzt verwirrt."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691832,
				tcgplayer: 478142
			}
		},
	],
}

export default card
