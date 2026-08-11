import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [42],
	set: Set,

	name: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'es-es': "Golbat",
		'it-it': "Golbat",
		'pt-br': "Golbat",
		'de-de': "Golbat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti",
		'es-es': "Zubat",
		'it-it': "Zubat",
		'pt-br': "Zubat",
		'de-de': "Zubat"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Leech Life",
			'fr-fr': "Vampirisme",
			'es-es': "Chupavidas",
			'it-it': "Sanguisuga",
			'pt-br': "Suga-vidas",
			'de-de': "Blutsauger"
		},

		effect: {
			'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			'fr-fr': "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
			'es-es': "Cura a este Pokémon la misma cantidad de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
			'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli che hai inflitto al Pokémon attivo del tuo avversario.",
			'pt-br': "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
			'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
		},

		damage: 30
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
	regulationMark: "G",

	description: {
		'en-us': "Its feet are tiny, but this Pokémon walks skillfully. It sneaks up on sleeping prey before sinking in its fangs and slurping up blood.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740629,
				tcgplayer: 523784,
				cardtrader: 265223
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740629,
				tcgplayer: 523784,
				cardtrader: 265223
			}
		},
	],

	illustrator: "Eri Yamaki",

	
}

export default card
