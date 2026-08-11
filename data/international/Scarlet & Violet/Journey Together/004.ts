import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [46],
	set: Set,

	name: {
		'en-us': "Paras",
		'fr-fr': "Paras",
		'es-es': "Paras",
		'de-de': "Paras",
		'it-it': "Paras",
		'pt-br': "Paras",
		'es-mx': "Paras"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Leech Life",
			'fr-fr': "Vampirisme",
			'es-es': "Chupavidas",
			'de-de': "Blutsauger",
			'it-it': "Sanguisuga",
			'pt-br': "Suga-vidas",
			'es-mx': "Chupavidas"
		},

		effect: {
			'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			'fr-fr': "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
			'es-es': "Cura a este Pokémon la misma cantidad de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
			'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast.",
			'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli che hai inflitto al Pokémon attivo del tuo avversario.",
			'pt-br': "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
			'es-mx': "Cura a este Pokémon la misma cantidad de puntos de daño que infligiste al Pokémon Activo de tu rival."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Ayako Ozaki",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817156,
				tcgplayer: 623431
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817156,
				tcgplayer: 623431
			}
		},
	],
}

export default card
