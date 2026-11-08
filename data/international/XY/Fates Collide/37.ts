import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Marowak",
		'fr-fr': "Ossatueur",
		'es-es': "Marowak",
		'it-it': "Marowak",
		'pt-br': "Marowak",
		'de-de': "Knogga"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		105,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
		'es-es': "Cubone",
		'it-it': "Cubone",
		'pt-br': "Cubone",
		'de-de': "Tragosso"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bodyguard",
				'fr-fr': "Garde du Corps",
				'es-es': "Guardaespaldas",
				'it-it': "Guardia del Corpo",
				'pt-br': "Guarda-costas",
				'de-de': "Leibwache"
			},
			effect: {
				'en-us': "Prevent all effects of attacks done to you or your hand by your opponent's Pokémon. Remove any existing effects.",
				'fr-fr': "Évitez tous les effets d'attaques infligés à vous-même ou à votre main par les Pokémon de votre adversaire. Retirez tous les effets déjà en action.",
				'es-es': "Evita todos los efectos de los ataques infligidos a ti o tu mano por Pokémon de tu rival. Elimina los efectos ya existentes.",
				'it-it': "Previeni tutti gli effetti degli attacchi inflitti a te o alla tua mano dai Pokémon del tuo avversario. Rimuovi gli effetti esistenti.",
				'pt-br': "Previne todos os efeitos de ataques causados a você ou a sua mão pelo Pokémon do seu oponente. Remove quaisquer efeitos existentes.",
				'de-de': "Verhindere alle Effekte von Angriffen, die dir oder deinen Handkarten durch gegnerische Pokémon zugefügt werden. Alle bestehenden Effekte verlieren ihre Wirkung."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Bonemerang",
				'fr-fr': "Osmerang",
				'es-es': "Huesomerang",
				'it-it': "Ossomerang",
				'pt-br': "Ossomerangue",
				'de-de': "Knochmerang"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 60 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 60 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 60 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.",
	},

	thirdParty: {
		cardmarket: 289863,
		tcgplayer: 117797
	}
}

export default card
