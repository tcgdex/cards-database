import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Delcatty",
		fr: "Delcatty",
		de: "Enokoro"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		301,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Skitty",
		fr: "Eneco",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Attracting Body",
				fr: "Corps attrayant",
				de: "Attraktive Figur"
			},
			effect: {
				en: "If Delcatty is your Active Pokémon and is damaged by an opponent's attack (even if Delcatty is Knocked Out), flip a coin. If heads, the Attacking Pokémon is now Confused.",
				fr: "Si Delcatty est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Delcatty est mis K.O), lancez une pièce. Si c'est face, le Pokémon Attaquant est maintenant Confus.",
				de: "Wenn Enekoro dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Enekoro dadurch kampfunfähig wird), wirf 1 Münze. Bei \"Kopf\" ist das Angreifende Pokémon jetzt verwirrt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Assist",
				fr: "Assist-Énergie",
				de: "Energieförderung"
			},
			effect: {
				en: "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à 1 des Pokémon de votre Banc.",
				de: "Durchsuche deinen Ablagestapel nach 1 Basis-Energiekarte und lege sie an 1 Pokémon auf deiner Bank an."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		fr: "Les femmes Dresseurs raffolent de sa sublime fourrure. Il ne possède pas de nid."
	},

	thirdParty: {
		cardmarket: 278172
	}
}

export default card
