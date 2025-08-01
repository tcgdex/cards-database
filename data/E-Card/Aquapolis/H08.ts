import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Entei",
		fr: "Entei",
		de: "Entei"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Pure Body",
				fr: "Corps pur",
				de: "Reiner Körper"
			},
			effect: {
				en: "To attach a Fire Energy card from your hand to Entei, you must discard an Energy card attached to Entei. (Attach the Fire Energy, and then discard an Energy from Entei.)",
				fr: "Pour attacher une carte Énergie  de votre main à Entei, vous devez vous défausser d'une carte Énergie attachée à Entei. (Attachez l'Énergie , et défaussez-vous ensuite d'une Énergie attachée à Entei.)",
				de: "Um eine -Energiekarte aus deiner Hand an Entei anzulegen, musst du eine an Entei angelegte Energiekarte auf deinen Ablagestapel legen. (Lege erst die -Energie an, und lege dann eine an Entei angelegte Energiekarte auf den Ablagestapel.)"

			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burning Fang",
				fr: "Croc brûlant",
				de: "Brennende Klaue"
			},
			effect: {
				en: "You may flip a coin. If heads, discard a Energy card attached to Entei and the Defending Pokémon is now Burned.",
				fr: "Vous pouvez lancer une pièce. Si c'est face, défaussez-vous d'une carte Énergie  attachée à Entei et le Pokémon Défenseur est maintenant Brûlé.",
				de: "Du kannst eine Münze werfen. Lege bei \"Kopf\" eine an Entei angelegte -Energiekarte auf deinen Ablagestapel, und das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275065,
		tcgplayer: 85267
	}
}

export default card
