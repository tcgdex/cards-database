import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Marowak",
		fr: "Ossatueur",
		es: "Marowak",
		it: "Marowak",
		pt: "Marowak",
		de: "Knogga"
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
		en: "Cubone",
		fr: "Osselait",
		es: "Cubone",
		it: "Cubone",
		pt: "Cubone",
		de: "Tragosso"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bodyguard",
				fr: "Garde du Corps",
				es: "Guardaespaldas",
				it: "Guardia del Corpo",
				pt: "Guarda-costas",
				de: "Leibwache"
			},
			effect: {
				en: "Prevent all effects of attacks done to you or your hand by your opponent's Pokémon. Remove any existing effects.",
				fr: "Évitez tous les effets d'attaques infligés à vous-même ou à votre main par les Pokémon de votre adversaire. Retirez tous les effets déjà en action.",
				es: "Evita todos los efectos de los ataques infligidos a ti o tu mano por Pokémon de tu rival. Elimina los efectos ya existentes.",
				it: "Previeni tutti gli effetti degli attacchi inflitti a te o alla tua mano dai Pokémon del tuo avversario. Rimuovi gli effetti esistenti.",
				pt: "Previne todos os efeitos de ataques causados a você ou a sua mão pelo Pokémon do seu oponente. Remove quaisquer efeitos existentes.",
				de: "Verhindere alle Effekte von Angriffen, die dir oder deinen Handkarten durch gegnerische Pokémon zugefügt werden. Alle bestehenden Effekte verlieren ihre Wirkung."
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
				en: "Bonemerang",
				fr: "Osmerang",
				es: "Huesomerang",
				it: "Ossomerang",
				pt: "Ossomerangue",
				de: "Knochmerang"
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 60 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 60 de danos vezes o número de caras.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	thirdParty: {
		cardmarket: 289863,
		tcgplayer: 117797
	}
}

export default card
