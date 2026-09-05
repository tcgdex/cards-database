import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Sharpedo",
		fr: "Sharpedo",
		de: "Tohaido"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [318],

	dexId: [319],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Carvanha",
		fr: "Carvanha",
		de: "Kanivanha"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rough Skin",
				fr: "Peau dure",
				de: "Rauhaut"
			},
			effect: {
				en: "If Sharpedo is your Active Pokémon and is damaged by an opponent's attack (even if Sharpedo is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
				fr: "Si Sharpedo est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Sharpedo est mis K.O.), placez un marqueur de dégât sur le Pokémon Attaquant.",
				de: "Wenn Tohaido dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Tohaido dadurch kampfunfähig wird), legst du 1 Schadensmarke auf das Angreifende Pokémon."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Slash",
				fr: "Entaille",
				de: "Dunkler Hieb"
			},
			effect: {
				en: "You may discard a Darkness Energy card attached to Sharpedo. If you do, this attack does 40 damage plus 30 more damage.",
				fr: "Vous pouvez défausser une carte Énergie {D} attachée à Sharpedo. Les dégâts de base de cette attaque sont de 70 au lieu de 40.",
				de: "Du kannst eine {W}-Energiekarte, die an Tohaido angelegt ist, auf den Ablagestapel legen. Wenn du das machst, beträgt der Grundschaden dieses Angriffs 70 Schadenspunkte anstelle von 40."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275670,
				tcgplayer: 89097
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275670,
				tcgplayer: 89097
			}
		},
	],

}

export default card
